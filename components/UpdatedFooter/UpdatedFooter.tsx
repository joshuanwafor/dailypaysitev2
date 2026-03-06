import Link from 'next/link';

export default function UpdatedFooter() {
  return (
    <footer className="relative bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat  text-white mt-16 lg:pt-3 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5 -mt-4">
            <img
              src="/images/logo-brand.png"
              alt="DailyPay"
              className="h-12 w-auto object-contain object-left brightness-0 invert"
            />
            <p className="hsla(0, 0%, 100%, 1) font-onest font-normal text-sm leading-6 max-w-[200px]">
              Empowering employees to access their earned income daily
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20  flex items-center justify-center hover:border-white/60 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2375 0H12.2311L7.87614 4.99014L13 11.7817H8.98857L5.84443 7.6635L2.25086 11.7817H0.255357L4.91307 6.44243L0 0.000928559H4.11357L6.95129 3.76443L10.2375 0ZM9.53643 10.5857H10.6414L3.51 1.13379H2.32514L9.53643 10.5857Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20  flex items-center justify-center hover:border-white/60 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.16821 0C7.89942 0.0019499 8.27055 0.00584971 8.59099 0.0149492L8.71708 0.019499C8.86267 0.0246987 9.00631 0.0311984 9.17986 0.038998C9.87142 0.0714964 10.3433 0.180691 10.7573 0.341233C11.1863 0.506325 11.5477 0.729913 11.9091 1.09065C12.2397 1.41545 12.4955 1.80852 12.6585 2.24239C12.819 2.65642 12.9282 3.12829 12.9607 3.82051C12.9685 3.9934 12.975 4.13704 12.9802 4.28328L12.9841 4.40938C12.9939 4.72916 12.9978 5.10029 12.9991 5.83151L12.9997 6.31638V7.16784C13.0013 7.64193 12.9963 8.11602 12.9848 8.58997L12.9809 8.71606C12.9757 8.8623 12.9692 9.00595 12.9614 9.17884C12.9289 9.87105 12.8184 10.3423 12.6585 10.757C12.4955 11.1908 12.2397 11.5839 11.9091 11.9087C11.5843 12.2393 11.1912 12.4951 10.7573 12.6581C10.3433 12.8187 9.87142 12.9278 9.17986 12.9603L8.71708 12.9798L8.59099 12.9837C8.27055 12.9928 7.89942 12.9974 7.16821 12.9987L6.68333 12.9993H5.83252C5.35822 13.001 4.88391 12.996 4.40975 12.9844L4.28365 12.9805C4.12936 12.9747 3.9751 12.9679 3.82088 12.9603C3.12931 12.9278 2.65744 12.8187 2.24276 12.6581C1.80912 12.495 1.41629 12.2393 1.09166 11.9087C0.760796 11.584 0.504815 11.1909 0.341603 10.757C0.181061 10.3429 0.0718661 9.87105 0.0393677 9.17884L0.0198687 8.71606L0.0166189 8.58997C0.00463747 8.11602 -0.000779502 7.64193 0.000369699 7.16784V5.83151C-0.00142934 5.35742 0.00333759 4.88333 0.014669 4.40938L0.0192188 4.28328C0.0244185 4.13704 0.0309182 3.9934 0.0387178 3.82051C0.0712161 3.12829 0.180411 2.65707 0.340952 2.24239C0.504546 1.80834 0.760976 1.41526 1.09231 1.09065C1.41675 0.760169 1.80935 0.504422 2.24276 0.341233C2.65744 0.180691 3.12866 0.0714964 3.82088 0.038998C3.99377 0.0311984 4.13806 0.0246987 4.28365 0.019499L4.40975 0.0155992C4.8837 0.00405106 5.35779 -0.000932506 5.83188 0.00064992L7.16821 0ZM6.50004 3.24984C5.63813 3.24984 4.81152 3.59223 4.20206 4.20169C3.5926 4.81115 3.25021 5.63776 3.25021 6.49967C3.25021 7.36158 3.5926 8.18819 4.20206 8.79765C4.81152 9.40712 5.63813 9.74951 6.50004 9.74951C7.36195 9.74951 8.18856 9.40712 8.79802 8.79765C9.40749 8.18819 9.74988 7.36158 9.74988 6.49967C9.74988 5.63776 9.40749 4.81115 8.79802 4.20169C8.18856 3.59223 7.36195 3.24984 6.50004 3.24984ZM6.50004 4.54977C6.75611 4.54973 7.00967 4.60012 7.24626 4.69807C7.48285 4.79603 7.69783 4.93962 7.87893 5.12065C8.06002 5.30169 8.20368 5.51662 8.30172 5.75318C8.39975 5.98973 8.45022 6.24328 8.45027 6.49935C8.45031 6.75541 8.39992 7.00898 8.30196 7.24557C8.20401 7.48216 8.06042 7.69714 7.87938 7.87823C7.69835 8.05933 7.48342 8.20299 7.24686 8.30102C7.01031 8.39905 6.75676 8.44953 6.50069 8.44957C5.98355 8.44957 5.48758 8.24414 5.1219 7.87846C4.75623 7.51278 4.55079 7.01682 4.55079 6.49967C4.55079 5.98253 4.75623 5.48656 5.1219 5.12088C5.48758 4.75521 5.98355 4.54977 6.50069 4.54977M9.91302 2.27489C9.69754 2.27489 9.49089 2.36048 9.33852 2.51285C9.18616 2.66521 9.10056 2.87187 9.10056 3.08734C9.10056 3.30282 9.18616 3.50947 9.33852 3.66184C9.49089 3.81421 9.69754 3.8998 9.91302 3.8998C10.1285 3.8998 10.3351 3.81421 10.4875 3.66184C10.6399 3.50947 10.7255 3.30282 10.7255 3.08734C10.7255 2.87187 10.6399 2.66521 10.4875 2.51285C10.3351 2.36048 10.1285 2.27489 9.91302 2.27489Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20  flex items-center justify-center hover:border-white/60 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6.5C13 2.912 10.088 0 6.5 0C2.912 0 0 2.912 0 6.5C0 9.646 2.236 12.2655 5.2 12.87V8.45H3.9V6.5H5.2V4.875C5.2 3.6205 6.2205 2.6 7.475 2.6H9.1V4.55H7.8C7.4425 4.55 7.15 4.8425 7.15 5.2V6.5H9.1V8.45H7.15V12.9675C10.4325 12.6425 13 9.8735 13 6.5Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20  flex items-center justify-center hover:border-white/60 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="13"
                  height="19"
                  viewBox="0 0 13 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="translate-y-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.09122 17.7579L7.08022 17.7599L7.00922 17.7949L6.98922 17.7989L6.97522 17.7949L6.90422 17.7599C6.89355 17.7566 6.88555 17.7583 6.88022 17.7649L6.87622 17.7749L6.85922 18.2029L6.86422 18.2229L6.87422 18.2359L6.97822 18.3099L6.99322 18.3139L7.00522 18.3099L7.10922 18.2359L7.12122 18.2199L7.12522 18.2029L7.10822 17.7759C7.10555 17.7653 7.09989 17.7593 7.09122 17.7579ZM7.35622 17.6449L7.34322 17.6469L7.15822 17.7399L7.14822 17.7499L7.14522 17.7609L7.16322 18.1909L7.16822 18.2029L7.17622 18.2099L7.37722 18.3029C7.38988 18.3063 7.39955 18.3036 7.40622 18.2949L7.41022 18.2809L7.37622 17.6669C7.37289 17.6549 7.36622 17.6476 7.35622 17.6449ZM6.64122 17.6469C6.63681 17.6443 6.63154 17.6434 6.62651 17.6445C6.62148 17.6456 6.61708 17.6487 6.61422 17.6529L6.60822 17.6669L6.57422 18.2809C6.57489 18.2929 6.58055 18.3009 6.59122 18.3049L6.60622 18.3029L6.80722 18.2099L6.81722 18.2019L6.82122 18.1909L6.83822 17.7609L6.83522 17.7489L6.82522 17.7389L6.64122 17.6469Z"
                    fill="#0A181A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8333 0C11.408 0 11.9591 0.228273 12.3654 0.634602C12.7717 1.04093 13 1.59203 13 2.16667V10.8333C13 11.408 12.7717 11.9591 12.3654 12.3654C11.9591 12.7717 11.408 13 10.8333 13H2.16667C1.59203 13 1.04093 12.7717 0.634602 12.3654C0.228273 11.9591 0 11.408 0 10.8333V2.16667C0 1.59203 0.228273 1.04093 0.634602 0.634602C1.04093 0.228273 1.59203 0 2.16667 0H10.8333ZM3.61111 5.05556C3.41957 5.05556 3.23587 5.13165 3.10042 5.26709C2.96498 5.40253 2.88889 5.58623 2.88889 5.77778V9.38889C2.88889 9.58043 2.96498 9.76413 3.10042 9.89958C3.23587 10.035 3.41957 10.1111 3.61111 10.1111C3.80266 10.1111 3.98636 10.035 4.1218 9.89958C4.25724 9.76413 4.33333 9.58043 4.33333 9.38889V5.77778C4.33333 5.58623 4.25724 5.40253 4.1218 5.26709C3.98636 5.13165 3.80266 5.05556 3.61111 5.05556ZM5.77778 4.33333C5.58623 4.33333 5.40253 4.40942 5.26709 4.54487C5.13165 4.68031 5.05556 4.86401 5.05556 5.05556V9.38889C5.05556 9.58043 5.13165 9.76413 5.26709 9.89958C5.40253 10.035 5.58623 10.1111 5.77778 10.1111C5.96932 10.1111 6.15302 10.035 6.28847 9.89958C6.42391 9.76413 6.5 9.58043 6.5 9.38889V6.74556C6.72028 6.49711 7.09222 6.20533 7.50606 6.02839C7.74656 5.92583 8.10839 5.88394 8.35972 5.96339C8.4431 5.98454 8.51736 6.03219 8.57133 6.09917C8.60889 6.14972 8.66667 6.26239 8.66667 6.5V9.38889C8.66667 9.58043 8.74276 9.76413 8.8782 9.89958C9.01364 10.035 9.19734 10.1111 9.38889 10.1111C9.58043 10.1111 9.76413 10.035 9.89958 9.89958C10.035 9.76413 10.1111 9.58043 10.1111 9.38889V6.5C10.1111 6.01611 9.98833 5.58567 9.73267 5.24044C9.49741 4.9274 9.16815 4.69786 8.79306 4.58539C8.14161 4.381 7.42011 4.49439 6.93839 4.70094C6.78417 4.76728 6.63393 4.84251 6.48844 4.92628C6.45817 4.75987 6.37045 4.60936 6.24057 4.50101C6.1107 4.39265 5.94692 4.33331 5.77778 4.33333ZM3.61111 2.88889C3.41957 2.88889 3.23587 2.96498 3.10042 3.10042C2.96498 3.23587 2.88889 3.41957 2.88889 3.61111C2.88889 3.80266 2.96498 3.98636 3.10042 4.1218C3.23587 4.25724 3.41957 4.33333 3.61111 4.33333C3.80266 4.33333 3.98636 4.25724 4.1218 4.1218C4.25724 3.98636 4.33333 3.80266 4.33333 3.61111C4.33333 3.41957 4.25724 3.23587 4.1218 3.10042C3.98636 2.96498 3.80266 2.88889 3.61111 2.88889Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Product column */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-white/40 font-onest font-medium text-xs uppercase tracking-widest">
              Product
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/#features"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-white/40 font-onest font-medium text-xs uppercase tracking-widest">
              Company
            </h4>
            <div className="flex flex-col gap-3 ">
              <Link
                href="#"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                About us
              </Link>
              <Link
                href="https://medium.com/@daudatemidayo25/introducing-dailypay-founders-perspective-c94670f5c45e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Help center
              </Link>
            </div>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 font-onest font-medium text-xs uppercase tracking-widest">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="#"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Terms of service
              </Link>
              <Link
                href="#"
                className="text-white font-onest font-normal text-base hover:text-white/70 transition-colors"
              >
                Cookie policy
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer box */}
        <div className="rounded-[16px] border border-white/10 px-6 py-8 mb-10 flex justify-center">
          <p className="text-[hsla(0,0%,100%,1)] font-onest font-normal text-lg max-w-6xl  leading-6">
            DailyPay is a financial technology platform, not a bank. All banking services are
            provided by our licensed partners, Safe Haven Microfinance Bank and Wema Bank, both
            regulated by the Central Bank of Nigeria (CBN). DailyPay delivers secure technology and
            payment solutions in partnership with these regulated financial institutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-[hsla(0,0%,100%,1)] font-onest font-normal text-sm">
            © {new Date().getFullYear()} DailyPay by alerts. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/ng/app/dailypay/id6751250517"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 bg-[#191919] border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <path
                  d="M24.9466 26C23.84 27.6533 22.6666 29.2667 20.88 29.2933C19.0933 29.3333 18.52 28.24 16.4933 28.24C14.4533 28.24 13.8266 29.2667 12.1333 29.3333C10.3866 29.4 9.06665 27.5733 7.94665 25.96C5.66665 22.6667 3.91998 16.6 6.26665 12.52C7.42665 10.4933 9.50665 9.21332 11.76 9.17332C13.4666 9.14666 15.0933 10.3333 16.1466 10.3333C17.1866 10.3333 19.16 8.90666 21.2266 9.11999C22.0933 9.15999 24.52 9.46666 26.08 11.76C25.96 11.84 23.1866 13.4667 23.2133 16.84C23.2533 20.8667 26.7466 22.2133 26.7866 22.2267C26.7466 22.32 26.2266 24.1467 24.9466 26ZM17.3333 4.66666C18.3066 3.55999 19.92 2.71999 21.2533 2.66666C21.4266 4.22666 20.8 5.79999 19.8666 6.91999C18.9466 8.05332 17.4266 8.93332 15.9333 8.81332C15.7333 7.27999 16.48 5.67999 17.3333 4.66666Z"
                  fill="white"
                />
              </svg>
              <span className="text-white font-onest font-medium text-sm">App store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 bg-[#191919] border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors"
            >
              <img src="/images/play-store.png" alt="" className="w-5 h-5 object-contain" />
              <span className="text-white font-onest font-medium text-sm">Play store</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
