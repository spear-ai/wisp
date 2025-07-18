import Link from "next/link";
import { getSsrIntl } from "@/helpers/get-ssr-intl";
import { CodeBlock } from "./code-block";
import { Scene } from "./scene";
import { Title } from "./title";

const LandingPage = async () => {
  const intl = await getSsrIntl();

  return (
    <>
      <aside
        aria-hidden
        className="-z-10 absolute xl:fixed top-0 flex justify-center items-center w-full pointer-none"
      >
        <div className="relative -left-[80px] sm:-left-[120px] md:-left-[180px] lg:-left-[240px] xl:-left-[320px]">
          <Scene />
        </div>
      </aside>
      <header className="relative xl:fixed inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto grid grid-cols-6 px-6">
          <div className="col-span-full xl:col-span-2 xl:pe-4 py-4 pointer-events-auto">
            <nav>
              <Link
                className="font-mono inline-flex items-center text-sm text-white"
                href="/"
              >
                <svg
                  className="size-4 fill-current"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  viewBox="0 0.01 238 42.09"
                >
                  <g>
                    <path d="M238 2c-100,100 -129,-27 -238,40 90,-102 120,22 238,-40z" />
                  </g>
                </svg>
                <span className="ms-2">
                  <Title />
                </span>
              </Link>
            </nav>
            <p className="text-sm text-neutral-100">
              {intl.formatMessage({
                defaultMessage:
                  "Linux distribution for developers with good taste.",
                id: "a3Mbo4",
              })}
            </p>
            <div className="mt-4">
              <CodeBlock />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto grid grid-cols-6 min-h-full relative px-6 pointer-events-none">
        <div className="col-span-6 xl:col-span-4 my-24 xl:my-48 xl:col-start-3 pointer-events-auto">
          <ul className="sm:columns-2 md:columns-3 gap-6 bg-neutral-950/20">
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Hyper performant",
                    id: "L06GjH",
                  })}
                </h1>
                <div className="mt-4 text-sm text-neutral-100 max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus velit at sapien cursus, ornare accumsan est placerat. Morbi ante elit, facilisis sit amet ligula ut, dignissim malesuada arcu.",
                      id: "HXEo/R",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Insanely secure",
                    id: "tzELWi",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Built on top of STIG-compliant base images.",
                      id: "WqQwZx",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Maximally portable",
                    id: "fKjppy",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Run Wisp locally or remotely; on bare metal, as a virtual machine, or as a Docker container. Connect via your browser.",
                      id: "b8ktSm",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Uncompromisingly beautiful",
                    id: "cxR+6E",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Sed eu tempus nisl. Praesent eleifend tortor sed neque feugiat feugiat. Curabitur tempor purus diam, eu finibus nulla sollicitudin eu. Suspendisse metus mauris, feugiat vitae ligula faucibus, lobortis vulputate enim. Mauris ac ultrices sem. Nam non ex a massa dapibus mollis. Quisque semper commodo mattis.",
                      id: "yXuqMj",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "AI Integrated Code Editor",
                    id: "8kS0sQ",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Write code with the best AI tools, use any model, and retain full control over your data.",
                      id: "RBnfrj",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Lorem ipsum dolor sit amet",
                    id: "sfSqpr",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Sed eu tempus nisl. Praesent eleifend tortor sed neque feugiat feugiat. Curabitur tempor purus diam, eu finibus nulla sollicitudin eu. Suspendisse metus mauris, feugiat vitae ligula faucibus, lobortis vulputate enim. Mauris ac ultrices sem. Nam non ex a massa dapibus mollis. Quisque semper commodo mattis.",
                      id: "yXuqMj",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Lorem ipsum dolor sit amet",
                    id: "sfSqpr",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus velit at sapien cursus, ornare accumsan est placerat. Morbi ante elit, facilisis sit amet ligula ut, dignissim malesuada arcu.",
                      id: "HXEo/R",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Lorem ipsum dolor sit amet",
                    id: "sfSqpr",
                  })}
                </h1>
                <div className="mt-4 text-sm text-neutral-100 max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus velit at sapien cursus, ornare accumsan est placerat. Morbi ante elit, facilisis sit amet ligula ut, dignissim malesuada arcu.",
                      id: "HXEo/R",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Lorem ipsum dolor sit amet",
                    id: "sfSqpr",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus velit at sapien cursus, ornare accumsan est placerat. Morbi ante elit, facilisis sit amet ligula ut, dignissim malesuada arcu.",
                      id: "HXEo/R",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-2 break-inside-avoid pt-4">
              <article>
                <h1 className="text-xl text-neutral-50">
                  {intl.formatMessage({
                    defaultMessage: "Lorem ipsum dolor sit amet",
                    id: "sfSqpr",
                  })}
                </h1>
                <div className="mt-2 text-neutral-200 text-sm max-w-prose">
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus velit at sapien cursus, ornare accumsan est placerat. Morbi ante elit, facilisis sit amet ligula ut, dignissim malesuada arcu.",
                      id: "HXEo/R",
                    })}
                  </p>
                  <p className="mt-4 text-sm">
                    {intl.formatMessage({
                      defaultMessage: "…",
                      id: "2J0s+9",
                    })}
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </main>
      <footer className="relative xl:fixed inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto grid grid-cols-6 px-6">
          <div className="col-span-full xl:col-span-2 xl:pe-4 py-4 flex-col xl:flex justify-end xl:h-screen">
            <div className="flex items-center gap-2 pointer-events-auto">
              <p className="text-sm text-neutral-200">
                {intl.formatMessage(
                  {
                    defaultMessage: "Made by {spear}",
                    id: "OaPZFp",
                  },
                  {
                    spear: (
                      <Link
                        className="text-primary-200"
                        href="https://spear.ai"
                        rel="noopener"
                        target="_blank"
                      >
                        {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}
                        Spear AI
                      </Link>
                    ),
                  },
                )}
              </p>
              {/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
              <span className="text-neutral-500">•</span>
              <Link
                className="text-neutral-100 relative"
                href="https://github.com/spear-ai/wisp"
                rel="noopener"
                target="_blank"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
