"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Check,
  ChevronDown,
  Code,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Minus,
  Plus,
  Redo2,
  Save,
  Search,
  Table,
  Trash2,
  Underline,
  Undo2,
  X,
} from "lucide-react";

const DARK = "#1C3636";
const WHITE = "#FFFFFF";

const CATEGORIES = [
  "AI-CHATBOT",
  "AI-AUTOMATION",
  "SEO",
  "WEB-DEVELOPMENT",
  "WEB-DESIGNING",
  "CONTENT-WRITING",
  "BLOG-WRITING",
];

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */

function getPlainText(html = "") {
  if (!html) return "";

  const temp = document.createElement("div");
  temp.innerHTML = html;

  return temp.textContent || temp.innerText || "";
}

function getCharacterCount(html = "") {
  return getPlainText(html).replace(/\s/g, "").length;
}

function createSlug(title = "") {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* -------------------------------------------------------
   MARKDOWN / HTML HELPERS
------------------------------------------------------- */

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
  Decode ONLY encoded HTML.

  Real HTML such as:
  <ul><li>Hello</li></ul>

  is returned unchanged.

  Encoded HTML such as:
  &lt;ul&gt;&lt;li&gt;Hello&lt;/li&gt;&lt;/ul&gt;

  is decoded.
*/
function decodeHtmlEntities(value = "") {
  if (!value) return "";

  if (typeof document === "undefined") {
    return value;
  }

  if (
    !value.includes("&lt;") &&
    !value.includes("&gt;") &&
    !value.includes("&amp;")
  ) {
    return value;
  }

  const textarea =
    document.createElement("textarea");

  textarea.innerHTML = value;

  return textarea.value;
}

function containsRealHtml(value = "") {
  return /<(p|h1|h2|h3|h4|h5|h6|ul|ol|li|blockquote|table|thead|tbody|tr|th|td|strong|b|em|i|u|a|pre|code|hr|div|br|img|span)\b/i.test(
    value
  );
}

function formatInlineMarkdown(text = "") {
  let value = escapeHtml(text);

  /* Images */
  value = value.replace(
    /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g,
    '<img src="$2" alt="$1" />'
  );

  /* Links */
  value = value.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  /* Bold + italic */
  value = value.replace(
    /\*\*\*([^*]+)\*\*\*/g,
    "<strong><em>$1</em></strong>"
  );

  value = value.replace(
    /___([^_]+)___/g,
    "<strong><em>$1</em></strong>"
  );

  /* Bold */
  value = value.replace(
    /\*\*([^*]+)\*\*/g,
    "<strong>$1</strong>"
  );

  value = value.replace(
    /__([^_]+)__/g,
    "<strong>$1</strong>"
  );

  /* Italic */
  value = value.replace(
    /(^|[^\*])\*([^*]+)\*(?!\*)/g,
    "$1<em>$2</em>"
  );

  value = value.replace(
    /(^|[^_])_([^_]+)_(?!_)/g,
    "$1<em>$2</em>"
  );

  /* Inline code */
  value = value.replace(
    /`([^`]+)`/g,
    "<code>$1</code>"
  );

  return value;
}

function isMarkdownTableLine(line = "") {
  return (
    line.trim().startsWith("|") &&
    line.trim().endsWith("|")
  );
}

function isMarkdownTableSeparator(line = "") {
  const clean = line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "");

  const cells = clean.split("|");

  return (
    cells.length > 0 &&
    cells.every((cell) =>
      /^:?-{3,}:?$/.test(
        cell.trim()
      )
    )
  );
}

function parseMarkdownTable(
  lines,
  startIndex
) {
  if (
    startIndex + 1 >=
    lines.length
  ) {
    return null;
  }

  if (
    !isMarkdownTableLine(
      lines[startIndex]
    ) ||
    !isMarkdownTableSeparator(
      lines[startIndex + 1]
    )
  ) {
    return null;
  }

  const getCells = (line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) =>
        cell.trim()
      );

  const headers = getCells(
    lines[startIndex]
  );

  let html = `
<table>
  <thead>
    <tr>
      ${headers
        .map(
          (header) =>
            `<th>${formatInlineMarkdown(
              header
            )}</th>`
        )
        .join("")}
    </tr>
  </thead>
  <tbody>
`;

  let index =
    startIndex + 2;

  while (
    index < lines.length &&
    isMarkdownTableLine(
      lines[index]
    )
  ) {
    const cells =
      getCells(lines[index]);

    html += `
    <tr>
      ${headers
        .map(
          (_, cellIndex) =>
            `<td>${formatInlineMarkdown(
              cells[cellIndex] || ""
            )}</td>`
        )
        .join("")}
    </tr>
`;

    index += 1;
  }

  html += `
  </tbody>
</table>
`;

  return {
    html,
    nextIndex: index,
  };
}

function markdownToHtml(
  markdown = ""
) {
  if (!markdown.trim()) {
    return "";
  }

  /*
    IMPORTANT:

    Existing real HTML must remain HTML.

    This prevents editor-generated HTML from
    becoming visible source code.
  */
  if (containsRealHtml(markdown)) {
    return markdown;
  }

  const normalized =
    markdown
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n");

  const lines =
    normalized.split("\n");

  const output = [];

  let index = 0;

  while (
    index < lines.length
  ) {
    const originalLine =
      lines[index];

    const line =
      originalLine.trim();

    /* Empty line */
    if (!line) {
      index += 1;
      continue;
    }

    /* Markdown table */
    const table =
      parseMarkdownTable(
        lines,
        index
      );

    if (table) {
      output.push(
        table.html
      );

      index =
        table.nextIndex;

      continue;
    }

    /* Fenced code block */
    if (
      line.startsWith("```")
    ) {
      const codeLines = [];

      index += 1;

      while (
        index < lines.length &&
        !lines[index]
          .trim()
          .startsWith("```")
      ) {
        codeLines.push(
          lines[index]
        );

        index += 1;
      }

      if (
        index < lines.length
      ) {
        index += 1;
      }

      output.push(
        `<pre><code>${escapeHtml(
          codeLines.join("\n")
        )}</code></pre>`
      );

      continue;
    }

    /* Headings */
    const headingMatch =
      line.match(
        /^(#{1,6})\s+(.+)$/
      );

    if (headingMatch) {
      const level =
        headingMatch[1].length;

      const content =
        headingMatch[2];

      output.push(
        `<h${level}>${formatInlineMarkdown(
          content
        )}</h${level}>`
      );

      index += 1;
      continue;
    }

    /* Blockquote */
    if (
      line.startsWith(">")
    ) {
      const quoteLines = [];

      while (
        index < lines.length
      ) {
        const current =
          lines[index].trim();

        if (
          !current.startsWith(">")
        ) {
          break;
        }

        quoteLines.push(
          current.replace(
            /^>\s?/,
            ""
          )
        );

        index += 1;
      }

      output.push(
        `<blockquote><p>${formatInlineMarkdown(
          quoteLines.join(" ")
        )}</p></blockquote>`
      );

      continue;
    }

    /* Unordered list */
    if (
      /^[-*+]\s+/.test(line)
    ) {
      const items = [];

      while (
        index < lines.length
      ) {
        const current =
          lines[index].trim();

        const match =
          current.match(
            /^[-*+]\s+(.+)$/
          );

        if (!match) {
          break;
        }

        items.push(
          `<li>${formatInlineMarkdown(
            match[1]
          )}</li>`
        );

        index += 1;
      }

      output.push(
        `<ul>${items.join(
          ""
        )}</ul>`
      );

      continue;
    }

    /* Ordered list */
    if (
      /^\d+\.\s+/.test(line)
    ) {
      const items = [];

      while (
        index < lines.length
      ) {
        const current =
          lines[index].trim();

        const match =
          current.match(
            /^\d+\.\s+(.+)$/
          );

        if (!match) {
          break;
        }

        items.push(
          `<li>${formatInlineMarkdown(
            match[1]
          )}</li>`
        );

        index += 1;
      }

      output.push(
        `<ol>${items.join(
          ""
        )}</ol>`
      );

      continue;
    }

    /* Horizontal rule */
    if (
      /^([-*_])(?:\s*\1){2,}$/.test(
        line
      )
    ) {
      output.push("<hr />");

      index += 1;
      continue;
    }

    /* Normal paragraph */
    const paragraphLines = [
      line,
    ];

    index += 1;

    while (
      index < lines.length
    ) {
      const next =
        lines[index].trim();

      if (!next) break;

      if (
        /^#{1,6}\s+/.test(
          next
        ) ||
        /^[-*+]\s+/.test(
          next
        ) ||
        /^\d+\.\s+/.test(
          next
        ) ||
        next.startsWith(">") ||
        next.startsWith("```") ||
        isMarkdownTableLine(
          next
        )
      ) {
        break;
      }

      paragraphLines.push(
        next
      );

      index += 1;
    }

    output.push(
      `<p>${formatInlineMarkdown(
        paragraphLines.join(
          " "
        )
      )}</p>`
    );
  }

  return output.join("\n");
}

/* -------------------------------------------------------
   NORMALIZE BLOG CONTENT
------------------------------------------------------- */

function normalizeBlogContent(
  content = ""
) {
  if (
    !content ||
    !content.trim()
  ) {
    return "";
  }

  /*
    DO NOT blindly decode real HTML.

    ContentEditable already gives us HTML:

    <ul>
      <li><b>Hello</b></li>
    </ul>

    That must remain HTML.
  */
  let value = content;

  /*
    Only decode when the content is actually
    HTML-encoded.
  */
  if (
    value.includes("&lt;") ||
    value.includes("&gt;")
  ) {
    value =
      decodeHtmlEntities(value);
  }

  /*
    Existing HTML is returned directly.
  */
  if (containsRealHtml(value)) {
    return value;
  }

  /*
    Plain text / Markdown is converted.
  */
  return markdownToHtml(value);
}

/* -------------------------------------------------------
   EDITOR HELPERS
------------------------------------------------------- */

function getClosestBlock(
  node,
  editor
) {
  if (!node || !editor) return null;

  let current =
    node.nodeType ===
    Node.TEXT_NODE
      ? node.parentElement
      : node;

  while (
    current &&
    current !== editor
  ) {
    const tag =
      current.tagName?.toLowerCase();

    if (
      [
        "p",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "pre",
        "li",
      ].includes(tag)
    ) {
      return current;
    }

    current =
      current.parentElement;
  }

  return null;
}

function getSelectionBlock(
  editor
) {
  if (!editor) return null;

  const selection =
    window.getSelection();

  if (
    !selection ||
    selection.rangeCount === 0
  ) {
    return null;
  }

  return getClosestBlock(
    selection.getRangeAt(0)
      .startContainer,
    editor
  );
}

function placeCaretAtEnd(
  element
) {
  if (!element) return;

  const range =
    document.createRange();

  const selection =
    window.getSelection();

  range.selectNodeContents(
    element
  );

  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
}

function dispatchEditorInput(
  editor
) {
  if (!editor) return;

  try {
    editor.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        inputType: "formatBlock",
      })
    );
  } catch {
    editor.dispatchEvent(
      new Event("input", {
        bubbles: true,
      })
    );
  }
}

/* -------------------------------------------------------
   IMAGE CROP MODAL
------------------------------------------------------- */

function ImageCropModal({
  isOpen,
  source,
  onClose,
  onApply,
}) {
  const canvasRef = useRef(null);

  const [ratio, setRatio] =
    useState("16:9");

  const [zoom, setZoom] =
    useState(1);

  const presets = {
    "16:9": 16 / 9,
    "3:2": 3 / 2,
    "1:1": 1,
    "4:5": 4 / 5,
  };

  useEffect(() => {
    if (!isOpen || !source) return;

    const image = new Image();

    image.onload = () => {
      const canvas =
        canvasRef.current;

      if (!canvas) return;

      const ctx =
        canvas.getContext("2d");

      const canvasWidth = 900;
      const canvasHeight = 500;

      canvas.width =
        canvasWidth;

      canvas.height =
        canvasHeight;

      ctx.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
      );

      const targetRatio =
        presets[ratio];

      let cropWidth =
        image.width;

      let cropHeight =
        image.height;

      if (
        image.width /
          image.height >
        targetRatio
      ) {
        cropWidth =
          image.height *
          targetRatio;
      } else {
        cropHeight =
          image.width /
          targetRatio;
      }

      cropWidth /= zoom;
      cropHeight /= zoom;

      const sx =
        (image.width -
          cropWidth) /
        2;

      const sy =
        (image.height -
          cropHeight) /
        2;

      const scale =
        Math.min(
          canvasWidth /
            cropWidth,
          canvasHeight /
            cropHeight
        );

      const drawWidth =
        cropWidth * scale;

      const drawHeight =
        cropHeight * scale;

      const dx =
        (canvasWidth -
          drawWidth) /
        2;

      const dy =
        (canvasHeight -
          drawHeight) /
        2;

      ctx.drawImage(
        image,
        sx,
        sy,
        cropWidth,
        cropHeight,
        dx,
        dy,
        drawWidth,
        drawHeight
      );
    };

    image.src = source;
  }, [
    isOpen,
    source,
    ratio,
    zoom,
  ]);

  const handleApply = () => {
    if (!source) return;

    const image = new Image();

    image.onload = () => {
      const targetRatio =
        presets[ratio];

      let cropWidth =
        image.width;

      let cropHeight =
        image.height;

      if (
        image.width /
          image.height >
        targetRatio
      ) {
        cropWidth =
          image.height *
          targetRatio;
      } else {
        cropHeight =
          image.width /
          targetRatio;
      }

      cropWidth /= zoom;
      cropHeight /= zoom;

      const sx =
        (image.width -
          cropWidth) /
        2;

      const sy =
        (image.height -
          cropHeight) /
        2;

      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width =
        Math.round(cropWidth);

      canvas.height =
        Math.round(cropHeight);

      const ctx =
        canvas.getContext("2d");

      ctx.drawImage(
        image,
        sx,
        sy,
        cropWidth,
        cropHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) return;

          const file =
            new File(
              [blob],
              "cropped-blog-image.jpg",
              {
                type: "image/jpeg",
              }
            );

          onApply(file);
        },
        "image/jpeg",
        0.92
      );
    };

    image.src = source;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          initial={{
            scale: 0.96,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
        >
          <div
            className="flex items-center justify-between border-b p-5"
            style={{
              borderColor:
                "#E5E7EB",
              color: DARK,
            }}
          >
            <div>
              <h3 className="text-xl font-bold">
                Crop Blog Image
              </h3>

              <p className="mt-1 text-sm opacity-70">
                Select the image
                ratio and adjust
                zoom.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 transition hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-5">
            <div className="mb-5 flex flex-wrap gap-2">
              {Object.keys(
                presets
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setRatio(item)
                  }
                  className="rounded-lg border px-4 py-2 text-sm font-semibold"
                  style={{
                    background:
                      ratio === item
                        ? DARK
                        : WHITE,
                    color:
                      ratio === item
                        ? WHITE
                        : DARK,
                    borderColor: DARK,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border bg-gray-50">
              <canvas
                ref={canvasRef}
                className="block h-auto w-full"
              />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: DARK,
                  }}
                >
                  Zoom
                </span>

                <span
                  className="text-sm"
                  style={{
                    color: DARK,
                  }}
                >
                  {zoom.toFixed(1)}x
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                onChange={(e) =>
                  setZoom(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border px-5 py-3 font-semibold"
                style={{
                  borderColor: DARK,
                  color: DARK,
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={
                  handleApply
                }
                className="rounded-xl px-5 py-3 font-semibold"
                style={{
                  background: DARK,
                  color: WHITE,
                }}
              >
                Apply Crop
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* -------------------------------------------------------
   RICH TEXT TOOLBAR
------------------------------------------------------- */

function RichTextToolbar({
  editorRef,
}) {
  const [tableOpen, setTableOpen] =
    useState(false);

  const [rows, setRows] =
    useState(3);

  const [columns, setColumns] =
    useState(3);

  const [activeTool, setActiveTool] =
    useState("");

  const savedRange = useRef(null);

  const saveSelection =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return;

      const selection =
        window.getSelection();

      if (
        !selection ||
        selection.rangeCount === 0
      ) {
        return;
      }

      const range =
        selection.getRangeAt(0);

      if (
        editor.contains(
          range.commonAncestorContainer
        )
      ) {
        savedRange.current =
          range.cloneRange();
      }
    }, [editorRef]);

  const restoreSelection =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return false;

      editor.focus();

      if (!savedRange.current) {
        return false;
      }

      const selection =
        window.getSelection();

      selection.removeAllRanges();

      selection.addRange(
        savedRange.current
      );

      return true;
    }, [editorRef]);

  const finishAction =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return;

      dispatchEditorInput(editor);

      requestAnimationFrame(() => {
        saveSelection();
      });
    }, [
      editorRef,
      saveSelection,
    ]);

  const runCommand =
    useCallback(
      (
        command,
        value = null,
        toolName = ""
      ) => {
        restoreSelection();

        try {
          document.execCommand(
            command,
            false,
            value
          );
        } catch (error) {
          console.error(error);
        }

        setActiveTool(toolName);

        finishAction();
      },
      [
        restoreSelection,
        finishAction,
      ]
    );

  const changeBlock =
    useCallback(
      (tagName, toolName) => {
        const editor =
          editorRef.current;

        if (!editor) return;

        restoreSelection();

        const block =
          getSelectionBlock(
            editor
          );

        if (!block) {
          const newBlock =
            document.createElement(
              tagName
            );

          newBlock.innerHTML =
            "<br>";

          editor.appendChild(
            newBlock
          );

          placeCaretAtEnd(
            newBlock
          );

          setActiveTool(
            toolName
          );

          finishAction();

          return;
        }

        const currentTag =
          block.tagName.toLowerCase();

        if (
          currentTag === tagName
        ) {
          if (
            tagName !== "p"
          ) {
            const paragraph =
              document.createElement(
                "p"
              );

            while (
              block.firstChild
            ) {
              paragraph.appendChild(
                block.firstChild
              );
            }

            block.replaceWith(
              paragraph
            );

            placeCaretAtEnd(
              paragraph
            );
          }
        } else {
          const replacement =
            document.createElement(
              tagName
            );

          while (
            block.firstChild
          ) {
            replacement.appendChild(
              block.firstChild
            );
          }

          block.replaceWith(
            replacement
          );

          placeCaretAtEnd(
            replacement
          );
        }

        setActiveTool(toolName);

        finishAction();
      },
      [
        editorRef,
        restoreSelection,
        finishAction,
      ]
    );

  const toggleList =
    useCallback(
      (type, toolName) => {
        const editor =
          editorRef.current;

        if (!editor) return;

        restoreSelection();

        const block =
          getSelectionBlock(
            editor
          );

        if (!block) return;

        const desiredTag =
          type === "unordered"
            ? "UL"
            : "OL";

        const desiredStyle =
          type === "unordered"
            ? "disc"
            : "decimal";

        const existingLi =
          block.tagName.toLowerCase() ===
          "li"
            ? block
            : block.closest(
                "li"
              );

        if (existingLi) {
          const parentList =
            existingLi.parentElement;

          if (
            parentList &&
            (parentList.tagName ===
              "UL" ||
              parentList.tagName ===
                "OL")
          ) {
            if (
              parentList.tagName ===
              desiredTag
            ) {
              const paragraph =
                document.createElement(
                  "p"
                );

              while (
                existingLi.firstChild
              ) {
                paragraph.appendChild(
                  existingLi.firstChild
                );
              }

              existingLi.replaceWith(
                paragraph
              );

              if (
                parentList.children
                  .length === 0
              ) {
                parentList.remove();
              }

              placeCaretAtEnd(
                paragraph
              );
            } else {
              const replacement =
                document.createElement(
                  desiredTag
                );

              replacement.style.listStyleType =
                desiredStyle;

              replacement.style.listStylePosition =
                "outside";

              replacement.style.paddingLeft =
                "2rem";

              replacement.style.margin =
                "1rem 0";

              while (
                parentList.firstChild
              ) {
                replacement.appendChild(
                  parentList.firstChild
                );
              }

              parentList.replaceWith(
                replacement
              );

              const firstLi =
                replacement.querySelector(
                  "li"
                );

              if (firstLi) {
                placeCaretAtEnd(
                  firstLi
                );
              }
            }

            setActiveTool(
              toolName
            );

            finishAction();

            return;
          }
        }

        const list =
          document.createElement(
            desiredTag
          );

        list.style.display =
          "block";

        list.style.listStyleType =
          desiredStyle;

        list.style.listStylePosition =
          "outside";

        list.style.paddingLeft =
          "2rem";

        list.style.margin =
          "1rem 0";

        const li =
          document.createElement(
            "li"
          );

        li.style.display =
          "list-item";

        li.style.listStyleType =
          desiredStyle;

        li.style.listStylePosition =
          "outside";

        li.style.margin =
          "0.4rem 0";

        while (
          block.firstChild
        ) {
          li.appendChild(
            block.firstChild
          );
        }

        if (
          !li.textContent.trim()
        ) {
          li.innerHTML = "<br>";
        }

        list.appendChild(li);

        block.replaceWith(list);

        placeCaretAtEnd(li);

        setActiveTool(toolName);

        finishAction();
      },
      [
        editorRef,
        restoreSelection,
        finishAction,
      ]
    );

  const applyAlignment =
    useCallback(
      (alignment, toolName) => {
        const editor =
          editorRef.current;

        if (!editor) return;

        restoreSelection();

        const block =
          getSelectionBlock(
            editor
          );

        if (!block) return;

        block.style.textAlign =
          alignment;

        setActiveTool(toolName);

        finishAction();
      },
      [
        editorRef,
        restoreSelection,
        finishAction,
      ]
    );

  const applyBlockquote =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return;

      restoreSelection();

      const block =
        getSelectionBlock(
          editor
        );

      if (!block) return;

      if (
        block.tagName.toLowerCase() ===
        "blockquote"
      ) {
        const paragraph =
          document.createElement(
            "p"
          );

        while (
          block.firstChild
        ) {
          paragraph.appendChild(
            block.firstChild
          );
        }

        block.replaceWith(
          paragraph
        );

        placeCaretAtEnd(
          paragraph
        );
      } else {
        const quote =
          document.createElement(
            "blockquote"
          );

        while (
          block.firstChild
        ) {
          quote.appendChild(
            block.firstChild
          );
        }

        block.replaceWith(
          quote
        );

        placeCaretAtEnd(quote);
      }

      setActiveTool(
        "blockquote"
      );

      finishAction();
    }, [
      editorRef,
      restoreSelection,
      finishAction,
    ]);

  const applyCode =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return;

      restoreSelection();

      const block =
        getSelectionBlock(
          editor
        );

      if (!block) return;

      if (
        block.tagName.toLowerCase() ===
        "pre"
      ) {
        const paragraph =
          document.createElement(
            "p"
          );

        while (
          block.firstChild
        ) {
          paragraph.appendChild(
            block.firstChild
          );
        }

        block.replaceWith(
          paragraph
        );

        placeCaretAtEnd(
          paragraph
        );
      } else {
        const pre =
          document.createElement(
            "pre"
          );

        while (
          block.firstChild
        ) {
          pre.appendChild(
            block.firstChild
          );
        }

        block.replaceWith(pre);

        placeCaretAtEnd(pre);
      }

      setActiveTool("code");

      finishAction();
    }, [
      editorRef,
      restoreSelection,
      finishAction,
    ]);

  const addLink =
    useCallback(() => {
      restoreSelection();

      const selection =
        window.getSelection();

      if (
        !selection ||
        selection.rangeCount === 0
      ) {
        return;
      }

      if (selection.isCollapsed) {
        window.alert(
          "Please select the text first, then click Link."
        );

        return;
      }

      const url =
        window.prompt(
          "Enter the URL:",
          "https://"
        );

      if (!url) return;

      document.execCommand(
        "createLink",
        false,
        url
      );

      setActiveTool("link");

      finishAction();
    }, [
      restoreSelection,
      finishAction,
    ]);

  const insertTable =
    useCallback(() => {
      const editor =
        editorRef.current;

      if (!editor) return;

      restoreSelection();

      const table =
        document.createElement(
          "table"
        );

      table.style.width = "100%";
      table.style.borderCollapse =
        "collapse";

      table.style.margin =
        "1rem 0";

      const tbody =
        document.createElement(
          "tbody"
        );

      for (
        let row = 0;
        row < rows;
        row += 1
      ) {
        const tr =
          document.createElement(
            "tr"
          );

        for (
          let col = 0;
          col < columns;
          col += 1
        ) {
          const cell =
            row === 0
              ? document.createElement(
                  "th"
                )
              : document.createElement(
                  "td"
                );

          cell.textContent =
            row === 0
              ? `Heading ${
                  col + 1
                }`
              : `Cell ${row}-${
                  col + 1
                }`;

          cell.style.border = `1px solid ${DARK}`;

          cell.style.padding =
            "10px";

          cell.style.textAlign =
            "left";

          if (row === 0) {
            cell.style.fontWeight =
              "700";
          }

          tr.appendChild(cell);
        }

        tbody.appendChild(tr);
      }

      table.appendChild(tbody);

      const selection =
        window.getSelection();

      if (
        selection &&
        selection.rangeCount > 0
      ) {
        const range =
          selection.getRangeAt(0);

        range.deleteContents();

        range.insertNode(table);

        const paragraph =
          document.createElement(
            "p"
          );

        paragraph.innerHTML =
          "<br>";

        table.after(paragraph);

        placeCaretAtEnd(
          paragraph
        );
      } else {
        editor.appendChild(table);
      }

      setTableOpen(false);

      setActiveTool("table");

      finishAction();
    }, [
      editorRef,
      restoreSelection,
      rows,
      columns,
      finishAction,
    ]);

  const ToolButton = ({
    title,
    toolName,
    children,
    onClick,
  }) => {
    const active =
      activeTool === toolName;

    return (
      <button
        type="button"
        title={title}
        className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 transition"
        style={{
          borderColor: DARK,
          background: active
            ? DARK
            : WHITE,
          color: active
            ? WHITE
            : DARK,
        }}
        onMouseDown={(event) => {
          event.preventDefault();

          saveSelection();

          onClick();
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <div
      className="relative z-50 border-b bg-white p-3"
      style={{
        borderColor: "#E5E7EB",
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <ToolButton
          title="Heading 1"
          toolName="h1"
          onClick={() =>
            changeBlock(
              "h1",
              "h1"
            )
          }
        >
          <span className="text-xs font-extrabold">
            H1
          </span>
        </ToolButton>

        <ToolButton
          title="Heading 2"
          toolName="h2"
          onClick={() =>
            changeBlock(
              "h2",
              "h2"
            )
          }
        >
          <span className="text-xs font-extrabold">
            H2
          </span>
        </ToolButton>

        <ToolButton
          title="Heading 3"
          toolName="h3"
          onClick={() =>
            changeBlock(
              "h3",
              "h3"
            )
          }
        >
          <span className="text-xs font-extrabold">
            H3
          </span>
        </ToolButton>

        <span className="mx-1 h-6 w-px bg-gray-200" />

        <ToolButton
          title="Bold"
          toolName="bold"
          onClick={() =>
            runCommand(
              "bold",
              null,
              "bold"
            )
          }
        >
          <Bold size={17} />
        </ToolButton>

        <ToolButton
          title="Italic"
          toolName="italic"
          onClick={() =>
            runCommand(
              "italic",
              null,
              "italic"
            )
          }
        >
          <Italic size={17} />
        </ToolButton>

        <ToolButton
          title="Underline"
          toolName="underline"
          onClick={() =>
            runCommand(
              "underline",
              null,
              "underline"
            )
          }
        >
          <Underline size={17} />
        </ToolButton>

        <ToolButton
          title="Link"
          toolName="link"
          onClick={addLink}
        >
          <LinkIcon size={17} />
        </ToolButton>

        <span className="mx-1 h-6 w-px bg-gray-200" />

        <ToolButton
          title="Bullet List"
          toolName="unordered"
          onClick={() =>
            toggleList(
              "unordered",
              "unordered"
            )
          }
        >
          <List size={18} />
        </ToolButton>

        <ToolButton
          title="Numbered List"
          toolName="ordered"
          onClick={() =>
            toggleList(
              "ordered",
              "ordered"
            )
          }
        >
          <ListOrdered size={18} />
        </ToolButton>

        <span className="mx-1 h-6 w-px bg-gray-200" />

        <ToolButton
          title="Align Left"
          toolName="left"
          onClick={() =>
            applyAlignment(
              "left",
              "left"
            )
          }
        >
          <AlignLeft size={17} />
        </ToolButton>

        <ToolButton
          title="Align Center"
          toolName="center"
          onClick={() =>
            applyAlignment(
              "center",
              "center"
            )
          }
        >
          <AlignCenter size={17} />
        </ToolButton>

        <ToolButton
          title="Align Right"
          toolName="right"
          onClick={() =>
            applyAlignment(
              "right",
              "right"
            )
          }
        >
          <AlignRight size={17} />
        </ToolButton>

        <span className="mx-1 h-6 w-px bg-gray-200" />

        <ToolButton
          title="Blockquote"
          toolName="blockquote"
          onClick={
            applyBlockquote
          }
        >
          <span className="text-lg font-bold">
            “
          </span>
        </ToolButton>

        <ToolButton
          title="Code Block"
          toolName="code"
          onClick={applyCode}
        >
          <Code size={17} />
        </ToolButton>

        <ToolButton
          title="Horizontal Line"
          toolName="hr"
          onClick={() =>
            runCommand(
              "insertHorizontalRule",
              null,
              "hr"
            )
          }
        >
          <Minus size={18} />
        </ToolButton>

        <ToolButton
          title="Undo"
          toolName="undo"
          onClick={() =>
            runCommand(
              "undo",
              null,
              "undo"
            )
          }
        >
          <Undo2 size={17} />
        </ToolButton>

        <ToolButton
          title="Redo"
          toolName="redo"
          onClick={() =>
            runCommand(
              "redo",
              null,
              "redo"
            )
          }
        >
          <Redo2 size={17} />
        </ToolButton>

        <div className="relative">
          <ToolButton
            title="Insert Table"
            toolName="table"
            onClick={() =>
              setTableOpen(
                (value) => !value
              )
            }
          >
            <Table size={17} />

            <ChevronDown
              size={13}
              className="ml-1"
            />
          </ToolButton>

          {tableOpen && (
            <div
              className="absolute left-0 top-12 z-[100] w-[320px] max-w-[calc(100vw-32px)] rounded-xl border bg-white p-4 shadow-2xl"
              style={{
                borderColor: DARK,
              }}
              onMouseDown={(event) =>
                event.preventDefault()
              }
            >
              <div
                className="mb-4 text-sm font-bold"
                style={{
                  color: DARK,
                }}
              >
                Insert Table
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="mb-1 block text-xs font-semibold"
                    style={{
                      color: DARK,
                    }}
                  >
                    Rows
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border p-2"
                      style={{
                        borderColor: DARK,
                        color: DARK,
                      }}
                      onClick={() =>
                        setRows(
                          Math.max(
                            1,
                            rows - 1
                          )
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>

                    <span
                      className="min-w-8 text-center font-semibold"
                      style={{
                        color: DARK,
                      }}
                    >
                      {rows}
                    </span>

                    <button
                      type="button"
                      className="rounded-lg border p-2"
                      style={{
                        borderColor: DARK,
                        color: DARK,
                      }}
                      onClick={() =>
                        setRows(
                          Math.min(
                            10,
                            rows + 1
                          )
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    className="mb-1 block text-xs font-semibold"
                    style={{
                      color: DARK,
                    }}
                  >
                    Columns
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border p-2"
                      style={{
                        borderColor: DARK,
                        color: DARK,
                      }}
                      onClick={() =>
                        setColumns(
                          Math.max(
                            1,
                            columns - 1
                          )
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>

                    <span
                      className="min-w-8 text-center font-semibold"
                      style={{
                        color: DARK,
                      }}
                    >
                      {columns}
                    </span>

                    <button
                      type="button"
                      className="rounded-lg border p-2"
                      style={{
                        borderColor: DARK,
                        color: DARK,
                      }}
                      onClick={() =>
                        setColumns(
                          Math.min(
                            10,
                            columns + 1
                          )
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={
                  insertTable
                }
                className="mt-4 w-full rounded-xl px-4 py-3 text-sm font-bold"
                style={{
                  background: DARK,
                  color: WHITE,
                }}
              >
                Insert Table
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   RICH TEXT EDITOR
------------------------------------------------------- */

function RichTextEditor({
  value,
  onChange,
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const nextValue =
      normalizeBlogContent(
        value
      );

    if (
      editorRef.current.innerHTML !==
      nextValue
    ) {
      editorRef.current.innerHTML =
        nextValue || "";
    }
  }, [value]);

  const handleInput = () => {
    if (!editorRef.current) return;

    /*
      Store the actual HTML produced by the editor.

      Do NOT escape it here.
    */
    onChange(
      editorRef.current.innerHTML
    );
  };

  const handlePaste = (
    event
  ) => {
    event.preventDefault();

    const clipboard =
      event.clipboardData;

    if (!clipboard) return;

    const html =
      clipboard.getData(
        "text/html"
      );

    const plainText =
      clipboard.getData(
        "text/plain"
      );

    /*
      Keep real rich HTML when pasted.
    */
    if (
      html &&
      containsRealHtml(html)
    ) {
      document.execCommand(
        "insertHTML",
        false,
        html
      );

      handleInput();

      return;
    }

    /*
      Convert plain text / Markdown.
    */
    const converted =
      markdownToHtml(
        plainText
      );

    document.execCommand(
      "insertHTML",
      false,
      converted
    );

    handleInput();
  };

  return (
    <div
      className="overflow-visible rounded-xl border bg-white"
      style={{
        borderColor: DARK,
      }}
    >
      <RichTextToolbar
        editorRef={editorRef}
      />

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        onBlur={() => {
          if (!editorRef.current)
            return;

          onChange(
            editorRef.current.innerHTML
          );
        }}
        className="min-h-[420px] p-5 outline-none"
        style={{
          color: DARK,
          lineHeight: 1.8,
        }}
        data-placeholder="Write your blog content here..."
      />

      <style jsx>{`
        [contenteditable] {
          line-height: 1.8;
          min-height: 420px;
        }

        [contenteditable]:focus {
          outline: none;
        }

        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          opacity: 0.4;
          pointer-events: none;
        }

        [contenteditable] h1 {
          display: block;
          font-size: 2.25rem;
          line-height: 1.15;
          font-weight: 800;
          margin: 1rem 0;
        }

        [contenteditable] h2 {
          display: block;
          font-size: 1.875rem;
          line-height: 1.25;
          font-weight: 800;
          margin: 1rem 0;
        }

        [contenteditable] h3 {
          display: block;
          font-size: 1.5rem;
          line-height: 1.35;
          font-weight: 700;
          margin: 1rem 0;
        }

        [contenteditable] p {
          display: block;
          margin: 0.75rem 0;
        }

        [contenteditable] strong,
        [contenteditable] b {
          font-weight: 700;
        }

        [contenteditable] em,
        [contenteditable] i {
          font-style: italic;
        }

        [contenteditable] u {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        [contenteditable] ul {
          display: block !important;
          list-style-type: disc !important;
          list-style-position: outside !important;
          padding-left: 2rem !important;
          margin: 1rem 0 !important;
        }

        [contenteditable] ul li {
          display: list-item !important;
          list-style-type: disc !important;
          list-style-position: outside !important;
          margin: 0.4rem 0;
        }

        [contenteditable] ol {
          display: block !important;
          list-style-type: decimal !important;
          list-style-position: outside !important;
          padding-left: 2rem !important;
          margin: 1rem 0 !important;
        }

        [contenteditable] ol li {
          display: list-item !important;
          list-style-type: decimal !important;
          list-style-position: outside !important;
          margin: 0.4rem 0;
        }

        [contenteditable] blockquote {
          display: block;
          margin: 1rem 0;
          padding: 1rem 1.25rem;
          border-left: 4px solid #1c3636;
          background: #f5f7f7;
          font-style: italic;
        }

        [contenteditable] pre {
          display: block;
          margin: 1rem 0;
          padding: 1rem;
          overflow-x: auto;
          border-radius: 0.75rem;
          background: #1c3636;
          color: white;
          font-family: monospace;
          white-space: pre-wrap;
        }

        [contenteditable] code {
          font-family: monospace;
        }

        [contenteditable] a {
          color: #1c3636;
          text-decoration: underline;
          font-weight: 600;
        }

        [contenteditable] hr {
          border: 0;
          border-top: 2px solid #1c3636;
          margin: 1.5rem 0;
        }

        [contenteditable] table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }

        [contenteditable] th,
        [contenteditable] td {
          border: 1px solid #1c3636;
          padding: 10px;
          text-align: left;
        }

        [contenteditable] th {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function BlogPostingPage() {
  const [form, setForm] =
    useState({
      title: "",
      description: "",
      category: "",
      author: "Admin",
      image: "",
      content: "",
    });

  const [imageFile, setImageFile] =
    useState(null);

  const [imagePreview, setImagePreview] =
    useState("");

  const [imageSize, setImageSize] =
    useState("full");

  const [cropOpen, setCropOpen] =
    useState(false);

  const [cropSource, setCropSource] =
    useState("");

  const fileInputRef =
    useRef(null);

  const [blogs, setBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [publishing, setPublishing] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  /* -------------------------------------------------------
     FETCH
  ------------------------------------------------------- */

  const fetchBlogs =
    useCallback(async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            "/api/blogs",
            {
              method: "GET",
              cache: "no-store",
            }
          );

        const text =
          await response.text();

        let data;

        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(
            `Blogs API returned invalid response: ${
              text.slice(0, 200) ||
              "Empty response"
            }`
          );
        }

        if (!response.ok) {
          throw new Error(
            data?.error ||
              data?.message ||
              "Failed to load blogs."
          );
        }

        setBlogs(
          Array.isArray(
            data?.blogs
          )
            ? data.blogs
            : []
        );
      } catch (err) {
        console.error(err);

        setError(
          err?.message ||
            "Failed to load blogs."
        );
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  /* -------------------------------------------------------
     FORM
  ------------------------------------------------------- */

  const updateForm = (
    field,
    value
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  /* -------------------------------------------------------
     IMAGE SELECT
  ------------------------------------------------------- */

  const handleImageSelect = (
    event
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {
      setError(
        "Please select a valid image file."
      );

      return;
    }

    if (
      file.size >
      10 * 1024 * 1024
    ) {
      setError(
        "Image size must be less than 10MB."
      );

      return;
    }

    setError("");

    const source =
      URL.createObjectURL(file);

    setCropSource(source);
    setCropOpen(true);
  };

  /* -------------------------------------------------------
     CROP
  ------------------------------------------------------- */

  const handleCropApply = (
    croppedFile
  ) => {
    if (!croppedFile) return;

    setImageFile(croppedFile);

    const preview =
      URL.createObjectURL(
        croppedFile
      );

    setImagePreview(preview);

    setCropOpen(false);
    setCropSource("");

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }
  };

  /* -------------------------------------------------------
     REMOVE IMAGE
  ------------------------------------------------------- */

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }
  };

  /* -------------------------------------------------------
     UPLOAD IMAGE
  ------------------------------------------------------- */

  const uploadImage = async (
    file
  ) => {
    if (!file) return "";

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await fetch(
        "/api/blogs/upload",
        {
          method: "POST",
          body: formData,
        }
      );

    const text =
      await response.text();

    let data = null;

    try {
      data = JSON.parse(text);
    } catch {
      const preview =
        text
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 500);

      throw new Error(
        `Image upload API returned a non-JSON response (HTTP ${response.status}). ${
          preview ||
          "Empty server response."
        }`
      );
    }

    if (!response.ok) {
      const serverError =
        data?.error ||
        data?.message ||
        "";

      if (
        serverError
          .toLowerCase()
          .includes(
            "supabase environment variables are missing"
          )
      ) {
        throw new Error(
          "Image upload cannot continue because the Supabase environment variables are missing from the server. Check your .env.local file and restart Next.js."
        );
      }

      throw new Error(
        serverError ||
          `Image upload failed (HTTP ${response.status}).`
      );
    }

    const imageUrl =
      data?.url ||
      data?.publicUrl ||
      data?.image ||
      data?.path ||
      "";

    if (!imageUrl) {
      throw new Error(
        "Image upload API succeeded but did not return an image URL."
      );
    }

    return imageUrl;
  };

  /* -------------------------------------------------------
     PUBLISH
  ------------------------------------------------------- */

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!form.title.trim()) {
      setError(
        "Title is required."
      );
      return;
    }

    if (
      !form.description.trim()
    ) {
      setError(
        "Description is required."
      );
      return;
    }

    if (!form.category) {
      setError(
        "Category is required."
      );
      return;
    }

    if (
      !getPlainText(
        form.content
      ).trim()
    ) {
      setError(
        "Blog content is required."
      );
      return;
    }

    try {
      setPublishing(true);

      let imageUrl =
        form.image || "";

      if (imageFile) {
        imageUrl =
          await uploadImage(
            imageFile
          );
      }

      /*
        Normalize exactly once.

        Real editor HTML remains real HTML.
        Plain Markdown is converted.
        Encoded HTML is decoded only when needed.
      */
      const finalContent =
        normalizeBlogContent(
          form.content
        );

      const payload = {
        title:
          form.title.trim(),

        description:
          form.description.trim(),

        category:
          form.category,

        author:
          form.author.trim() ||
          "Admin",

        image:
          imageUrl,

        content:
          finalContent,

        imageSize,

        slug:
          createSlug(form.title),
      };

      const response =
        await fetch(
          "/api/blogs",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body:
              JSON.stringify(
                payload
              ),
          }
        );

      const text =
        await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          `Blogs API returned a non-JSON response (HTTP ${response.status}). Server response: ${
            text
              .replace(
                /\s+/g,
                " "
              )
              .trim()
              .slice(0, 500) ||
            "Empty response"
          }`
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Failed to publish blog."
        );
      }

      setMessage(
        "Blog published successfully."
      );

      setForm({
        title: "",
        description: "",
        category: "",
        author: "Admin",
        image: "",
        content: "",
      });

      setImageFile(null);
      setImagePreview("");
      setCropSource("");

      if (fileInputRef.current) {
        fileInputRef.current.value =
          "";
      }

      await fetchBlogs();
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Failed to publish blog."
      );
    } finally {
      setPublishing(false);
    }
  };

  /* -------------------------------------------------------
     DELETE
  ------------------------------------------------------- */

  const handleDelete = async (
    id
  ) => {
    if (!id) return;

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this blog?"
      );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");
      setMessage("");

      const response =
        await fetch(
          `/api/blogs?id=${encodeURIComponent(
            id
          )}`,
          {
            method: "DELETE",
          }
        );

      const text =
        await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          `Delete API returned a non-JSON response (HTTP ${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Failed to delete blog."
        );
      }

      setBlogs(
        (previous) =>
          previous.filter(
            (blog) =>
              String(blog.id) !==
              String(id)
          )
      );

      setMessage(
        "Blog deleted successfully."
      );
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Failed to delete blog."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* -------------------------------------------------------
     SEARCH
  ------------------------------------------------------- */

  const filteredBlogs =
    blogs.filter((blog) => {
      const searchValue =
        search
          .trim()
          .toLowerCase();

      if (!searchValue) {
        return true;
      }

      return [
        blog.title,
        blog.description,
        blog.category,
        blog.author,
      ]
        .filter(Boolean)
        .some((value) =>
          String(value)
            .toLowerCase()
            .includes(searchValue)
        );
    });

  /* -------------------------------------------------------
     INPUT
  ------------------------------------------------------- */

  const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2";

  return (
    <main
      className="min-h-screen bg-white"
      style={{
        color: DARK,
      }}
    >
      {/* HEADER */}

      <section
        className="border-b"
        style={{
          borderColor: "#E5E7EB",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">
                AI Digital Agency
              </p>

              <h1 className="text-[30px] font-extrabold sm:text-[36px] lg:text-[42px]">
                Blog Posting
              </h1>

              <p className="mt-2 text-base opacity-70">
                Create, publish and manage
                your agency blogs.
              </p>
            </div>

            <div
              className="rounded-xl border px-5 py-3"
              style={{
                borderColor: DARK,
              }}
            >
              <div className="text-xs font-semibold opacity-60">
                Published Blogs
              </div>

              <div className="mt-1 text-2xl font-extrabold">
                {blogs.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGES */}

      <div className="mx-auto max-w-7xl px-6 pt-6 sm:px-8 lg:px-12">
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              className="mb-4 flex items-center gap-3 rounded-xl border p-4"
              style={{
                borderColor: DARK,
                color: DARK,
              }}
            >
              <Check size={19} />

              <span className="text-sm font-semibold">
                {message}
              </span>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              className="mb-4 rounded-xl border p-4 text-sm font-semibold"
              style={{
                borderColor: DARK,
                color: DARK,
              }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CREATE BLOG */}

      <section className="py-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white p-5 shadow-sm sm:p-7"
            style={{
              borderColor: DARK,
            }}
          >
            <div className="mb-7">
              <h2 className="text-2xl font-extrabold">
                Create New Blog
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Add your blog information
                and format your content.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* TITLE */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  Blog Title
                </label>

                <input
                  type="text"
                  value={form.title}
                  onChange={(event) =>
                    updateForm(
                      "title",
                      event.target.value
                    )
                  }
                  placeholder="Enter blog title"
                  className={inputClass}
                  style={{
                    borderColor: DARK,
                    color: DARK,
                  }}
                />
              </div>

              {/* DESCRIPTION */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  Description
                </label>

                <textarea
                  value={form.description}
                  onChange={(event) =>
                    updateForm(
                      "description",
                      event.target.value
                    )
                  }
                  placeholder="Enter short blog description"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  style={{
                    borderColor: DARK,
                    color: DARK,
                  }}
                />
              </div>

              {/* CATEGORY */}

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Category
                </label>

                <div className="relative">
                  <select
                    value={form.category}
                    onChange={(event) =>
                      updateForm(
                        "category",
                        event.target.value
                      )
                    }
                    className={`${inputClass} appearance-none pr-10`}
                    style={{
                      borderColor: DARK,
                      color: DARK,
                    }}
                  >
                    <option value="">
                      Select category
                    </option>

                    {CATEGORIES.map(
                      (category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      )
                    )}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              {/* AUTHOR */}

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Author
                </label>

                <input
                  type="text"
                  value={form.author}
                  onChange={(event) =>
                    updateForm(
                      "author",
                      event.target.value
                    )
                  }
                  placeholder="Author name"
                  className={inputClass}
                  style={{
                    borderColor: DARK,
                    color: DARK,
                  }}
                />
              </div>

              {/* IMAGE */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  Blog Image
                </label>

                <div className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={
                      handleImageSelect
                    }
                    className="hidden"
                    id="blog-image-input"
                  />

                  <label
                    htmlFor="blog-image-input"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
                    style={{
                      background: DARK,
                      color: WHITE,
                    }}
                  >
                    <ImageIcon size={18} />
                    Select Image
                  </label>

                  {imagePreview && (
                    <button
                      type="button"
                      onClick={
                        removeImage
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold"
                      style={{
                        borderColor: DARK,
                        color: DARK,
                      }}
                    >
                      <Trash2 size={17} />
                      Remove Image
                    </button>
                  )}

                  <span className="text-sm opacity-60">
                    JPG, PNG, WEBP — Max
                    10MB
                  </span>
                </div>

                {imagePreview && (
                  <div className="mt-4 overflow-hidden rounded-xl border">
                    <img
                      src={imagePreview}
                      alt="Blog preview"
                      className="h-auto max-h-[400px] w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* IMAGE SIZE */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  Image Size
                </label>

                <div className="flex flex-wrap gap-2">
                  {[
                    "small",
                    "medium",
                    "large",
                    "full",
                  ].map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() =>
                        setImageSize(
                          size
                        )
                      }
                      className="rounded-lg border px-4 py-2 text-sm font-semibold capitalize"
                      style={{
                        borderColor: DARK,
                        background:
                          imageSize ===
                          size
                            ? DARK
                            : WHITE,
                        color:
                          imageSize ===
                          size
                            ? WHITE
                            : DARK,
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTENT */}

              <div className="md:col-span-2">
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-bold">
                    Blog Content
                  </label>

                  <span className="text-xs opacity-60">
                    {getCharacterCount(
                      form.content
                    )}{" "}
                    characters
                  </span>
                </div>

                <RichTextEditor
                  value={form.content}
                  onChange={(value) =>
                    updateForm(
                      "content",
                      value
                    )
                  }
                />
              </div>
            </div>

            {/* PUBLISH */}

            <div className="mt-7 flex justify-end">
              <button
                type="submit"
                disabled={publishing}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  background: DARK,
                  color: WHITE,
                }}
              >
                <Save size={18} />

                {publishing
                  ? "Publishing..."
                  : "Publish Blog"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* BLOG LIST */}

      <section className="py-6 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold">
                Published Blogs
              </h2>

              <p className="mt-1 text-sm opacity-65">
                Manage your published
                blog posts.
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search blogs..."
                className={`${inputClass} pl-11`}
                style={{
                  borderColor: DARK,
                }}
              />
            </div>
          </div>

          {loading ? (
            <div className="rounded-xl border p-8 text-center text-sm opacity-60">
              Loading blogs...
            </div>
          ) : filteredBlogs.length ===
            0 ? (
            <div className="rounded-xl border p-8 text-center">
              <p className="font-semibold">
                No blogs found.
              </p>

              <p className="mt-1 text-sm opacity-60">
                Publish your first blog
                using the form above.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map(
                (blog) => (
                  <motion.article
                    key={blog.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="overflow-hidden rounded-2xl border bg-white"
                    style={{
                      borderColor: DARK,
                    }}
                  >
                    {blog.image && (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={blog.image}
                          alt={
                            blog.title ||
                            "Blog image"
                          }
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span
                          className="rounded-full border px-3 py-1 text-xs font-bold"
                          style={{
                            borderColor:
                              DARK,
                            color: DARK,
                          }}
                        >
                          {blog.category ||
                            "BLOG"}
                        </span>

                        <span className="text-xs opacity-55">
                          {blog.author ||
                            "Admin"}
                        </span>
                      </div>

                      <h3 className="line-clamp-2 text-xl font-extrabold">
                        {blog.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 opacity-65">
                        {
                          blog.description
                        }
                      </p>

                      <div className="mt-5 flex justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              blog.id
                            )
                          }
                          disabled={
                            deletingId ===
                            blog.id
                          }
                          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold disabled:opacity-50"
                          style={{
                            borderColor:
                              DARK,
                            color: DARK,
                          }}
                        >
                          <Trash2
                            size={16}
                          />

                          {deletingId ===
                          blog.id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* CROP MODAL */}

      <ImageCropModal
        isOpen={cropOpen}
        source={cropSource}
        onClose={() => {
          setCropOpen(false);
          setCropSource("");
        }}
        onApply={
          handleCropApply
        }
      />
    </main>
  );
}

