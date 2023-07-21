import React from "react";
import DropDown from "./svg/navbar/DropDown";
export default function Header() {
  return (
    <div>
      <div className="flex h-24 w-full justify-around">
        <div className="flex w-1/2 items-center ml-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99901 19.9991C10.2735 20.0102 10.5412 19.9122 10.7436 19.7265C10.9461 19.5408 11.0669 19.2826 11.0796 19.0082V0.992058C11.0564 0.721406 10.9325 0.469312 10.7324 0.285617C10.5322 0.101923 10.2705 0 9.99884 0C9.72719 0 9.46544 0.101923 9.26532 0.285617C9.0652 0.469312 8.94129 0.721406 8.91808 0.992058V19.0082C8.93079 19.2827 9.05161 19.541 9.25415 19.7266C9.45669 19.9123 9.72447 20.0103 9.99901 19.9991ZM9.60802 0.992058C9.63072 0.905621 9.68142 0.82914 9.75219 0.774562C9.82296 0.719984 9.90981 0.690383 9.99918 0.690383C10.0886 0.690383 10.1754 0.719984 10.2462 0.774562C10.3169 0.82914 10.3676 0.905621 10.3904 0.992058V19.0082C10.3676 19.0946 10.3169 19.1711 10.2462 19.2257C10.1754 19.2803 10.0886 19.3099 9.99918 19.3099C9.90981 19.3099 9.82296 19.2803 9.75219 19.2257C9.68142 19.1711 9.63072 19.0946 9.60802 19.0082V0.992058ZM5.5398 17.8269C5.81445 17.8379 6.08226 17.7396 6.28468 17.5537C6.48711 17.3677 6.60768 17.1092 6.62004 16.8346V3.16564C6.60768 2.89105 6.48711 2.63252 6.28468 2.44657C6.08226 2.26062 5.81445 2.16238 5.5398 2.17332C5.26526 2.16228 4.99751 2.26034 4.79504 2.44608C4.59257 2.63181 4.47184 2.89013 4.45921 3.1646V16.8346C4.47157 17.1093 4.59219 17.3679 4.79469 17.5538C4.99719 17.7398 5.26509 17.838 5.5398 17.8269ZM5.1488 3.16564C5.16321 3.07497 5.21172 2.99324 5.2844 2.93716C5.35708 2.88108 5.44844 2.85489 5.5398 2.86394C5.63115 2.85489 5.72251 2.88108 5.79519 2.93716C5.86787 2.99324 5.91638 3.07497 5.93079 3.16564V16.8346C5.91638 16.9253 5.86787 17.007 5.79519 17.0631C5.72251 17.1192 5.63115 17.1454 5.5398 17.1363C5.44844 17.1454 5.35708 17.1192 5.2844 17.0631C5.21172 17.007 5.16321 16.9253 5.1488 16.8346V3.16564ZM14.4582 16.1644C14.7329 16.1754 15.0008 16.0772 15.2033 15.8912C15.4058 15.7053 15.5265 15.4467 15.5388 15.172V4.82823C15.5147 4.55834 15.3904 4.30726 15.1905 4.12439C14.9905 3.94152 14.7294 3.84011 14.4584 3.84011C14.1874 3.84011 13.9263 3.94152 13.7263 4.12439C13.5264 4.30726 13.4021 4.55834 13.378 4.82823V15.172C13.3903 15.4466 13.5109 15.7052 13.7133 15.8911C13.9158 16.077 14.1836 16.1753 14.4582 16.1644ZM14.0676 4.82823C14.0904 4.74194 14.1411 4.66563 14.2118 4.61118C14.2826 4.55673 14.3693 4.52721 14.4586 4.52721C14.5478 4.52721 14.6346 4.55673 14.7053 4.61118C14.776 4.66563 14.8267 4.74194 14.8496 4.82823V15.172C14.8267 15.2583 14.776 15.3346 14.7053 15.3891C14.6346 15.4435 14.5478 15.4731 14.4586 15.4731C14.3693 15.4731 14.2826 15.4435 14.2118 15.3891C14.1411 15.3346 14.0904 15.2583 14.0676 15.172V4.82823ZM18.9174 5.79158C18.6429 5.78054 18.3752 5.8786 18.1727 6.06434C17.9702 6.25008 17.8495 6.5084 17.8369 6.78287V13.196C17.8605 13.4663 17.9846 13.7179 18.1847 13.9011C18.3847 14.0844 18.6461 14.1861 18.9174 14.1861C19.1887 14.1861 19.4502 14.0844 19.6502 13.9011C19.8503 13.7179 19.9743 13.4663 19.998 13.196V6.78287C19.9854 6.5084 19.8647 6.25008 19.6622 6.06434C19.4597 5.8786 19.192 5.78054 18.9174 5.79158ZM19.3084 13.1967C19.2856 13.283 19.2349 13.3593 19.1642 13.4138C19.0934 13.4682 19.0067 13.4977 18.9174 13.4977C18.8282 13.4977 18.7414 13.4682 18.6707 13.4138C18.6 13.3593 18.5493 13.283 18.5264 13.1967V6.78355C18.5493 6.69727 18.6 6.62095 18.6707 6.56651C18.7414 6.51206 18.8282 6.48253 18.9174 6.48253C19.0067 6.48253 19.0934 6.51206 19.1642 6.56651C19.2349 6.62095 19.2856 6.69727 19.3084 6.78355V13.1967ZM1.08058 13.2922C1.35506 13.3033 1.62276 13.2052 1.82522 13.0196C2.02768 12.8339 2.14845 12.5757 2.16117 12.3013V7.469C2.14845 7.1946 2.02768 6.93637 1.82522 6.7507C1.62276 6.56504 1.35506 6.46702 1.08058 6.47807C0.806103 6.46702 0.538404 6.56504 0.335944 6.7507C0.133484 6.93637 0.0127116 7.1946 0 7.469V12.3013C0.0127116 12.5757 0.133484 12.8339 0.335944 13.0196C0.538404 13.2052 0.806103 13.3033 1.08058 13.2922ZM0.689587 7.469C0.704079 7.3784 0.75262 7.29676 0.825292 7.24075C0.897963 7.18474 0.98928 7.15859 1.08058 7.16765C1.17189 7.15859 1.2632 7.18474 1.33587 7.24075C1.40855 7.29676 1.45709 7.3784 1.47158 7.469V12.3013C1.45709 12.3919 1.40855 12.4735 1.33587 12.5295C1.2632 12.5855 1.17189 12.6117 1.08058 12.6026C0.98928 12.6117 0.897963 12.5855 0.825292 12.5295C0.75262 12.4735 0.704079 12.3919 0.689587 12.3013V7.469Z"
              fill="#373B53"
            />
          </svg>
          <p className="ml-3 text-[18px] leading-normal tracking-[0.18px] font-medium font-heebo text-[#373B53]">
            8 people listening you
          </p>
        </div>
        <div className="w-1/2 flex justify-end mr-24 items-center space-x-4">
          <div className="flex items-center space-x-3 mr-10">
            <div className="flex flex-col items-start">
              <p className="text-right font-heebo text-[14px] not-italic font-medium leading-normal tracking-[0.14px] text-[#2E3B52]">
                Carlos López
              </p>
              <p className="text-right font-heebo text-[12px] not-italic font-medium leading-normal tracking-[0.14px] text-[#A6ACBE]">
                Artist
              </p>
            </div>
            <img
              src="/assets/header/avatar.png"
              className="rounded-full object-cover"
            />
            <DropDown />
          </div>
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#C9CED6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#C9CED6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="18" cy="4" r="3" fill="#0094B6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#C9CED6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="#C9CED6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#C9CED6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
