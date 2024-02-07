
const Email = () => {

const frag = document.createDocumentFragment();
const anchor = `
  <a href="mailto:BrettMorriss@gmail.com" target="_blank">
		<span class="sr-only">Email Brett</span>
		<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 117.88 122.88" fill="currentColor" width="32" height="32"><title>email-symbol</title><path d="M102.31,30.86,78,5.74V5.49H12.44V46h0L46.66,76.6l.15.14L58.36,87.06,105,46.36v-10l-2.64-5.49ZM64.07,28.44l.09-.41.56-2.47h6.83L67.62,44.1c-.07.33-.14.63-.19.9h0a9.34,9.34,0,0,0-.18,1.42,1.43,1.43,0,0,0,.29.94,1,1,0,0,0,.72.33c.93,0,2.14-.61,3.61-1.82a16.05,16.05,0,0,0,3.85-5,15.19,15.19,0,0,0,.47-12.71,13.86,13.86,0,0,0-3.4-4.76,16,16,0,0,0-5.5-3.15,22.48,22.48,0,0,0-7.41-1.14,25.87,25.87,0,0,0-7.73,1.11A19.49,19.49,0,0,0,46,23.41a17.46,17.46,0,0,0-4.45,5.08,22.14,22.14,0,0,0-2.4,5.84,25.72,25.72,0,0,0-.83,6.54A18.36,18.36,0,0,0,40.07,49a16.3,16.3,0,0,0,5.14,6.18,21,21,0,0,0,8.16,3.55,34.53,34.53,0,0,0,10.8.42A25.52,25.52,0,0,0,72.27,57a15.69,15.69,0,0,0,5.63-4.5h5.51a18.14,18.14,0,0,1-3.5,5,20.31,20.31,0,0,1-5.06,3.66,26.25,26.25,0,0,1-6.49,2.26,36.89,36.89,0,0,1-7.84.77,36.4,36.4,0,0,1-11.44-1.67,23.41,23.41,0,0,1-8.58-4.81,20.32,20.32,0,0,1-5.27-7.5,25.24,25.24,0,0,1-1.77-9.62A28.31,28.31,0,0,1,35.3,30.22,23.54,23.54,0,0,1,49,16.39a29.27,29.27,0,0,1,11-2,27,27,0,0,1,9,1.44A19.93,19.93,0,0,1,76,20a18.12,18.12,0,0,1,4.47,6.38A21,21,0,0,1,82,34.46a19.13,19.13,0,0,1-1.24,6.78,19.37,19.37,0,0,1-3.56,6,17.25,17.25,0,0,1-5.44,4.19A15.06,15.06,0,0,1,65,53a6.17,6.17,0,0,1-3.25-.72A3.48,3.48,0,0,1,60.22,50,12,12,0,0,1,59,51a10.61,10.61,0,0,1-1.06.68,9.49,9.49,0,0,1-2.89,1.07,9.65,9.65,0,0,1-5.67-.55A9.38,9.38,0,0,1,45,48.44a12,12,0,0,1-1.69-6.56,19.55,19.55,0,0,1,1.74-8,16.59,16.59,0,0,1,5-6.44,11.56,11.56,0,0,1,7.29-2.51A7.46,7.46,0,0,1,64,28.25l.12.19ZM49.93,41.83a7.62,7.62,0,0,0,1.29,4.76,4.1,4.1,0,0,0,3.38,1.66,5.75,5.75,0,0,0,4.28-2,10,10,0,0,0,1-1.23,10.61,10.61,0,0,0,.6-.93,13.67,13.67,0,0,0,1.2-2.74,18.71,18.71,0,0,0,1-5.66v-.07a10.84,10.84,0,0,0-.06-1.16,7.48,7.48,0,0,0-.26-1.3,5.92,5.92,0,0,0-1-1.93A4.18,4.18,0,0,0,59.84,30a4.76,4.76,0,0,0-2-.42,5.74,5.74,0,0,0-4.1,1.78,11.34,11.34,0,0,0-2.78,4.54h0l0,0a17.92,17.92,0,0,0-1,5.86Zm60.51-.26a3.59,3.59,0,0,1,2.43-.93,4,4,0,0,1,2.06.6,5.09,5.09,0,0,1,1.26,1.07,7.06,7.06,0,0,1,1.69,4.26v70.64a5.71,5.71,0,0,1-1.66,4h0a5.67,5.67,0,0,1-4,1.66H5.67a5.71,5.71,0,0,1-4-1.66h0a5.62,5.62,0,0,1-1.66-4V46.57a7.1,7.1,0,0,1,1.73-4.32,5.5,5.5,0,0,1,1.26-1,4,4,0,0,1,2-.58,3.59,3.59,0,0,1,2,.57V2.74A2.74,2.74,0,0,1,9.7,0H78.9A2.71,2.71,0,0,1,81,1l28.65,29.59a2.71,2.71,0,0,1,.78,1.9h0v.79c0,.11,0,.22,0,.34s0,.22,0,.33v7.63ZM56.52,92.74,44.9,82.36,5.49,116.9v.31a.17.17,0,0,0,0,.13h0a.22.22,0,0,0,.13,0H112.21a.22.22,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V117L72.45,82,60.15,92.76h0a2.73,2.73,0,0,1-3.62,0Zm-15.73-14L5.49,47.15v62.48l35.3-30.94Zm71.6,31.06V47.12L76.6,78.39l35.79,31.36Z"/></svg>
	</a>`;

frag.innerHTML = anchor;
return frag;

};

export {Email};