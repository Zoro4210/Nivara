"use client";

import { InquiryForm } from "./InquiryForm";

export function ViewingDialog() {
  return (
    <dialog id="viewing-dialog" className="viewing-dialog" aria-labelledby="viewing-dialog-title">
      <div className="dialog-head">
        <p className="eyebrow">Private appointments</p>
        <button
          type="button"
          className="dialog-close"
          aria-label="Close private viewing form"
          onClick={() => (document.getElementById("viewing-dialog") as HTMLDialogElement)?.close()}
        >
          ×
        </button>
      </div>
      <h2 id="viewing-dialog-title">Find your<br />place in it.</h2>
      <p className="dialog-copy">Choose a project and preferred day. This preview keeps your information in the browser.</p>
      <InquiryForm formId="dialog-inquiry" compact />
    </dialog>
  );
}
