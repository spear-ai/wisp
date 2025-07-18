"use client";

import { useCallback, useState } from "react";
import { useIntl } from "react-intl";
import { useDebouncedCallback } from "use-debounce";
import { useCopyToClipboard } from "usehooks-ts";

export const CodeBlock = () => {
  const intl = useIntl();
  const [, copy] = useCopyToClipboard();
  const [wasCopied, setWasCopied] = useState(false);
  const code = "docker run -d -p 6901:6901 spearai/wisp-desktop";

  const resetWasCopied = useDebouncedCallback(() => {
    setWasCopied(false);
  }, 1000);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      void copy(code);
      setWasCopied(true);
      resetWasCopied();
    },
    [copy, resetWasCopied, setWasCopied]
  );

  return (
    <form onSubmit={handleSubmit}>
      <button
        className="font-mono hover:text-primary-300 active:text-primary-300 text-xs inline-flex hover:outline-primary-400 active:outline-primary-300 justify-center px-2 py-1 focus-visible:outline-2 outline-1 outline-primary-500 rounded-md cursor-default"
        title={intl.formatMessage({
          defaultMessage: "Copy to clipboard",
          id: "aCdAsI",
        })}
        type="submit"
      >
        <span className="text-neutral-100 text-start">{code}</span>
        {wasCopied ? (
          <svg
            className="inline-flex size-4 ms-1 relative -top-px text-success-100"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.0554 9.39446L14.8945 8.4446L10.4443 13.8837L8.5 11.9393L7.43934 13L10.5557 16.1163L16.0554 9.39446Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="inline-flex size-4 ms-1 relative -top-px text-neutral-200"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M8 8V2H22V16H16V22H2V8H8ZM14.5 16H8V9.5H3.5V20.5H14.5V16Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};
