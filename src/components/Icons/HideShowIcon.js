import * as React from "react"

function HideShowIcon(props) {
  return (
    <>
      {props.open ? (
        <svg width={24} height={24} fill="none" {...props}>
          <path
            d="M20.038 16.857C22.59 14.58 24 12 24 12s-4.5-8.25-12-8.25c-1.44.005-2.865.305-4.185.882L8.97 5.789A8.916 8.916 0 0112 5.25c3.18 0 5.818 1.752 7.752 3.685.93.936 1.765 1.963 2.49 3.065-.087.13-.183.274-.293.432a19.78 19.78 0 01-2.197 2.633c-.248.247-.506.492-.776.729l1.062 1.063z"
            fill="#6B7280"
          />
          <path
            d="M16.945 13.764a5.25 5.25 0 00-6.71-6.711l1.234 1.234a3.75 3.75 0 014.244 4.244l1.232 1.233zm-4.414 1.949l1.233 1.232a5.25 5.25 0 01-6.711-6.71l1.235 1.234a3.75 3.75 0 004.243 4.244z"
            fill="#6B7280"
          />
          <path
            d="M5.025 8.205c-.27.24-.53.483-.777.73A19.702 19.702 0 001.758 12l.292.432a19.78 19.78 0 002.198 2.633C6.181 16.998 8.822 18.75 12 18.75c1.074 0 2.085-.2 3.03-.54l1.155 1.158c-1.32.577-2.744.877-4.185.882C4.5 20.25 0 12 0 12s1.409-2.582 3.962-4.857l1.062 1.064.001-.002z"
            fill="#6B7280"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.469 21.531l-18-18 1.062-1.062 18 18-1.062 1.062z"
            fill="#6B7280"
          />
        </svg>
      ) : (
        <svg width={24} height={24} fill="none" {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12s-4.5-8.25-12-8.25S0 12 0 12s4.5 8.25 12 8.25S24 12 24 12zM1.76 12a19.7 19.7 0 002.49 3.065C6.18 16.998 8.82 18.75 12 18.75c3.18 0 5.819-1.752 7.752-3.685A19.703 19.703 0 0022.242 12a19.704 19.704 0 00-2.49-3.065C17.819 7.002 15.179 5.25 12 5.25c-3.18 0-5.819 1.752-7.752 3.685A19.7 19.7 0 001.758 12h.002z"
            fill="#6B7280"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM6.75 12a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
            fill="#6B7280"
          />
        </svg>
      )}
    </>
  )
}

export default HideShowIcon
