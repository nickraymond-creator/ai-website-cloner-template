// Stripe AU — Extracted SVG Icons as React Components

import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// Stripe wordmark logo
export function StripeLogo({ size = 64, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.4}
      viewBox="0 0 640 256"
      fill="currentColor"
      aria-label="Stripe"
      {...props}
    >
      <path d="M165.734 106.12c0-11.655 9.567-16.134 25.402-16.134 22.692 0 51.415 6.862 74.107 19.114V42.682C242.29 32.52 219.196 28 196.102 28c-58.07 0-96.755 30.31-96.755 80.9 0 78.902 108.78 66.248 108.78 100.243 0 13.748-11.952 18.218-28.585 18.218-24.688 0-56.274-10.16-81.16-23.91v67.01C123.014 284.272 149.9 290 176.786 290c59.666 0 100.641-29.411 100.641-80.502.2-85.164-109.693-69.93-111.693-103.378zm196.163-91.16l-68.804 14.645L293.292 93h-43.278v61.046h43.278v138.08h70.398V154.047h58.272l8.97-61.046h-67.24l.008-38.043zm141.76 80.5c-26.288 0-43.22 12.352-52.588 21.013l-3.487-16.733h-62.36v306.44l70.798-14.944.2-74.308c9.568 6.961 23.692 16.934 47.184 16.934 47.783 0 91.36-38.443 91.36-123.09-.199-77.5-44.175-115.313-91.107-115.313zm-16.034 177.362c-15.635 0-24.89-5.569-31.352-12.451l-.2-98.34c6.862-7.681 16.434-13.05 31.552-13.05 24.09 0 40.724 27.018 40.724 61.816 0 35.598-16.435 62.025-40.724 62.025zM592 90.983h70.797v202.132H592V90.983zm0-63.003l70.797-14.944V75.44L592 90.383V27.98z" />
    </svg>
  );
}

// Arrow right (used in CTA links)
export function ArrowRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

// Chevron down (nav dropdowns)
export function ChevronDownIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

// Hamburger menu (mobile nav)
export function MenuIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M3 5h14M3 10h14M3 15h14" />
    </svg>
  );
}

// Close X (mobile nav close)
export function CloseIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 4l12 12M16 4L4 16" />
    </svg>
  );
}

// Google logo (for "Sign up with Google" button)
export function GoogleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

// Chevron left (carousel prev)
export function ChevronLeftIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13 4l-6 6 6 6" />
    </svg>
  );
}

// Chevron right (carousel next)
export function ChevronRightIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 4l6 6-6 6" />
    </svg>
  );
}

// External link icon
export function ExternalLinkIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2H2v10h10V8M8 2h4v4M12 2L6 8" />
    </svg>
  );
}

// Plus/check badge (used in stats labels)
export function CheckIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}
