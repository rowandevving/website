import { signal } from "@preact/signals";

const opacity = signal({opacity: 100});

if (window.scrollY != 0) { opacity.value = {opacity: 0}; }

window.addEventListener('scroll', () => opacity.value = {opacity: 0});

export default function ScrollHint() {

    return (
      <>
        <div class="fixed bottom-0 md:flex flex-col items-center w-full text-accent hidden transition-opacity duration-200 pointer-events-none" style={opacity.value}>
          <div class="i-tabler-chevron-down text-6xl animate-bounce"></div>
        </div>
      </>
    );
}