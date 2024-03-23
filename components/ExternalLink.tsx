import React from "react";
import Link from "next/link";
import DropdownDefault from "./Dropdowns/DropdownDefault";

const ExternalLink: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="flex items-start justify-between border-b border-stroke py-5 px-6 dark:border-strokedark">
        <div>
          <h2 className="mb-1.5 text-title-md2 font-bold text-black dark:text-white">
            External Links
          </h2>
          <p className="text-sm font-medium">Most used resources</p>
        </div>
        <DropdownDefault />
      </div>

      <div className="px-3 pb-5">
        <div className="group flex items-center justify-between rounded-md p-4.5 hover:bg-gray-2 dark:hover:bg-graydark">
          <div className="flex items-center gap-4">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.86363V20.8636C15 22.8793 16.3892 24 17.8636 24C19.2273 24 20.7273 23.0454 20.7273 20.8636V2.99999C20.7273 1.15483 19.3636 0 17.8636 0C16.3636 0 15 1.27415 15 2.86363Z"
                fill="#F8AB00"
              />
              <path
                d="M7.5 12V20.8636C7.5 22.8792 8.8892 24 10.3636 24C11.7273 24 13.2273 23.0454 13.2273 20.8636V12.1363C13.2273 10.2912 11.8636 9.13635 10.3636 9.13635C8.86364 9.13635 7.5 10.4105 7.5 12Z"
                fill="#E37300"
              />
              <path
                d="M5.72727 21.1363C5.72727 22.7173 4.4446 24 2.86364 24C1.28267 24 0 22.7173 0 21.1363C0 19.5554 1.28267 18.2727 2.86364 18.2727C4.4446 18.2727 5.72727 19.5554 5.72727 21.1363Z"
                fill="#E37300"
              />
            </svg>

            <Link href="#">
              <h4 className="font-medium text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Google Analytics
              </h4>
            </Link>
          </div>

          <Link href="#" className="inline-block">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_552_42876)">
                <path
                  d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_552_42876">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        <div className="group flex items-center justify-between rounded-md p-4.5 hover:bg-gray-2 dark:hover:bg-graydark">
          <div className="flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_552_42904)">
                <path
                  d="M12 0.375C5.55 0.375 0.375 5.55 0.375 12C0.375 18.45 5.55 23.625 12 23.625C18.45 23.625 23.625 18.45 23.625 12C23.625 5.55 18.45 0.375 12 0.375ZM15.075 7.4625C14.6625 7.4625 14.325 7.4625 13.9125 7.4625C13.3875 7.4625 13.05 7.725 13.05 8.2125C13.0125 8.625 13.05 9.075 13.05 9.4125C13.05 9.5625 13.0875 9.5625 13.2 9.5625C13.7625 9.5625 14.3625 9.5625 14.925 9.5625C15.075 9.5625 15.15 9.6 15.15 9.7875C15.1125 10.4625 15 11.175 15 11.85C15 12 14.9625 12 14.775 12C14.2875 12 13.875 12 13.3875 12C13.0875 12 13.125 11.9625 13.125 12.2625C13.125 14.4375 13.125 16.5 13.125 18.675C13.125 18.9 13.0875 18.9375 12.8625 18.9375C12.075 18.9375 11.2875 18.9375 10.5 18.9375C10.275 18.9375 10.2375 18.9 10.2375 18.675C10.2375 17.55 10.2375 16.5 10.2375 15.45C10.2375 14.4 10.2375 13.275 10.2375 12.1875C10.2375 12.0375 10.2 11.925 10.0125 11.9625C9.7125 11.9625 9.3375 11.9625 9 11.9625C8.775 12.075 8.775 12 8.775 11.85C8.775 11.175 8.775 10.5375 8.775 9.7875C8.775 9.6375 8.8125 9.6375 8.925 9.6375C9.3 9.6375 9.6 9.6375 9.975 9.6375C10.2 9.6375 10.2375 9.6 10.2375 9.375C10.2375 8.85 10.2375 8.3625 10.2375 7.8C10.2375 7.1625 10.3875 6.6 10.7625 6.075C11.25 5.4375 11.925 5.1375 12.675 5.0625C13.4625 5.025 14.25 5.0625 15.0375 5.025C15.15 5.025 15.1875 5.0625 15.1875 5.175C15.1875 5.85 15.1875 6.5625 15.1875 7.2375C15.225 7.3875 15.1875 7.4625 15.075 7.4625Z"
                  fill="#4285F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_552_42904">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Link href="#">
              <h4 className="font-medium text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Facebook Ads
              </h4>
            </Link>
          </div>

          <Link href="#" className="inline-block">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_552_42876)">
                <path
                  d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_552_42876">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        <div className="group flex items-center justify-between rounded-md p-4.5 hover:bg-gray-2 dark:hover:bg-graydark">
          <div className="flex items-center gap-4">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.55217C0 0.694956 0.695478 0 1.55374 0H18.8723C19.7301 0 20.4261 0.697565 20.4261 1.55217V16.4478C20.4261 17.305 19.7306 18 18.8723 18H1.55374C0.696 18 0 17.3024 0 16.4478V1.55217ZM1.4087 2.18296V15.817C1.4087 16.2355 1.76087 16.5913 2.19548 16.5913H18.2306C18.6678 16.5913 19.0174 16.2449 19.0174 15.817V2.18296C19.0174 1.76452 18.6652 1.4087 18.2306 1.4087H2.19548C1.75826 1.4087 1.4087 1.75513 1.4087 2.18296ZM2.11304 9.23113C2.11304 8.8007 2.43652 8.45217 2.84035 8.45217H6.31565C6.71739 8.45217 7.04296 8.79861 7.04296 9.23113V15.887H2.11252V9.23113H2.11304ZM7.74783 6.41687C7.74783 5.98487 8.0713 5.63478 8.47513 5.63478H11.9504C12.3522 5.63478 12.6777 5.98122 12.6777 6.41687V15.887H7.7473V6.41687H7.74783ZM13.3826 3.5953C13.3826 3.16539 13.7061 2.81687 14.1099 2.81687H17.5852C17.987 2.81687 18.3125 3.16644 18.3125 3.5953V15.8864H13.3821V3.5953H13.3826Z"
                fill="#0080F7"
              />
            </svg>

            <Link href="#">
              <h4 className="font-medium text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Seranking
              </h4>
            </Link>
          </div>

          <Link href="#" className="inline-block">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_552_42876)">
                <path
                  d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_552_42876">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        <div className="group flex items-center justify-between rounded-md p-4.5 hover:bg-gray-2 dark:hover:bg-graydark">
          <div className="flex items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_554_42938)">
                <path
                  d="M23.5875 7.2C23.55 6 23.325 5.1375 23.0625 4.35C22.8 3.5625 22.3875 2.925 21.75 2.2875C21.1125 1.65 20.475 1.275 19.725 0.975C18.975 0.675 18.15 0.4875 16.875 0.45C15.5625 0.375 15.1875 0.375 12 0.375C8.8125 0.375 8.475 0.375 7.2 0.4125C5.925 0.45 5.1375 0.675 4.35 0.9375C3.5625 1.2 2.925 1.65 2.2875 2.2875C1.65 2.925 1.2375 3.5625 0.975 4.35C0.675 5.1 0.4875 5.925 0.45 7.2C0.4125 8.475 0.375 8.8125 0.375 12C0.375 15.1875 0.375 15.525 0.4125 16.8C0.45 18.075 0.675 18.8625 0.9375 19.65C1.2 20.4375 1.6125 21.075 2.25 21.7125C2.8875 22.35 3.5625 22.7625 4.3125 23.025C5.0625 23.2875 5.8875 23.5125 7.1625 23.55C8.4375 23.625 8.775 23.625 11.9625 23.625C15.15 23.625 15.4875 23.625 16.7625 23.5875C18.0375 23.55 18.825 23.325 19.6125 23.0625C20.4 22.8 21.0375 22.3875 21.675 21.75C22.3125 21.1125 22.725 20.4375 22.9875 19.6875C23.25 18.9375 23.475 18.1125 23.5125 16.8375C23.55 15.6375 23.55 15.2625 23.55 12.075C23.55 8.8875 23.625 8.475 23.5875 7.2ZM21.4875 16.6875C21.45 17.8125 21.225 18.4125 21.075 18.8625C20.85 19.3875 20.5875 19.8 20.175 20.175C19.7625 20.5875 19.3875 20.8125 18.8625 21.075C18.45 21.225 17.85 21.45 16.6875 21.4875C15.4875 21.4875 15.1125 21.4875 12.0375 21.4875C8.9625 21.4875 8.55 21.4875 7.35 21.45C6.225 21.4125 5.625 21.1875 5.175 21.0375C4.65 20.8125 4.2375 20.55 3.8625 20.1375C3.45 19.725 3.225 19.35 2.9625 18.825C2.8125 18.4125 2.5875 17.8125 2.55 16.65C2.55 15.4875 2.55 15.1125 2.55 12C2.55 8.8875 2.55 8.5125 2.5875 7.3125C2.625 6.1875 2.85 5.5875 3 5.1375C3.225 4.6125 3.4875 4.2 3.8625 3.825C4.275 3.4125 4.65 3.1875 5.175 2.9625C5.5875 2.8125 6.1875 2.5875 7.35 2.55C8.55 2.5125 8.925 2.5125 12.0375 2.5125C15.15 2.5125 15.525 2.5125 16.725 2.55C17.85 2.5875 18.45 2.8125 18.9 2.9625C19.425 3.1875 19.8375 3.45 20.2125 3.825C20.625 4.2375 20.85 4.6125 21.1125 5.1375C21.2625 5.55 21.4875 6.15 21.525 7.3125C21.5625 8.5125 21.5625 8.8875 21.5625 12C21.5625 15.1125 21.525 15.4875 21.4875 16.6875Z"
                  fill="url(#paint0_linear_554_42938)"
                />
                <path
                  d="M12.0006 6.03735C8.66309 6.03735 6.03809 8.73735 6.03809 11.9999C6.03809 15.3374 8.73809 17.9624 12.0006 17.9624C15.2631 17.9624 18.0006 15.3374 18.0006 11.9999C18.0006 8.66235 15.3381 6.03735 12.0006 6.03735ZM12.0006 15.8999C9.82559 15.8999 8.10059 14.1374 8.10059 11.9999C8.10059 9.86235 9.86309 8.09985 12.0006 8.09985C14.1756 8.09985 15.9006 9.82485 15.9006 11.9999C15.9006 14.1749 14.1756 15.8999 12.0006 15.8999Z"
                  fill="url(#paint1_linear_554_42938)"
                />
                <path
                  d="M18.2625 7.16257C19.0288 7.16257 19.65 6.54135 19.65 5.77507C19.65 5.00876 19.0288 4.38757 18.2625 4.38757C17.4962 4.38757 16.875 5.00876 16.875 5.77507C16.875 6.54135 17.4962 7.16257 18.2625 7.16257Z"
                  fill="url(#paint2_linear_554_42938)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_554_42938"
                  x1="4"
                  y1="1"
                  x2="20.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5851DB" />
                  <stop offset="0.25" stopColor="#833AB4" />
                  <stop offset="0.479167" stopColor="#C13584" />
                  <stop offset="0.739583" stopColor="#E1306C" />
                  <stop offset="1" stopColor="#FD1D1D" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_554_42938"
                  x1="7.90537"
                  y1="6.35792"
                  x2="16.358"
                  y2="17.6767"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5851DB" />
                  <stop offset="0.25" stopColor="#833AB4" />
                  <stop offset="0.479167" stopColor="#C13584" />
                  <stop offset="0.739583" stopColor="#E1306C" />
                  <stop offset="1" stopColor="#FD1D1D" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_554_42938"
                  x1="17.3082"
                  y1="4.46217"
                  x2="19.2769"
                  y2="7.09017"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5851DB" />
                  <stop offset="0.25" stopColor="#833AB4" />
                  <stop offset="0.479167" stopColor="#C13584" />
                  <stop offset="0.739583" stopColor="#E1306C" />
                  <stop offset="1" stopColor="#FD1D1D" />
                </linearGradient>
                <clipPath id="clip0_554_42938">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Link href="">
              <h4 className="font-medium text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                Instagram Ads
              </h4>
            </Link>
          </div>

          <Link href="#" className="inline-block">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_552_42876)">
                <path
                  d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_552_42876">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalLink;
