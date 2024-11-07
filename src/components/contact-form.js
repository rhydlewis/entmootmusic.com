import * as React from "react"
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdkogowr");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
        <input 
          id="email" 
          type="email" 
          name="email"
          style={{
            width: '50%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
        <textarea 
          id="message" 
          name="message"
          style={{
            width: '50%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minHeight: '150px'
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <button 
          type="submit" 
          disabled={state.submitting}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#3182ce',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
        <a
          href="/"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: '1px solid #3182ce',
            backgroundColor: 'white',
            color: '#3182ce',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Cancel
        </a>
      </div>
        <ValidationError errors={state.errors} />
    </form>
  );
}
