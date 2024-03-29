import { signal } from "@preact/signals";

const hinting = signal(true);

window.addEventListener('scroll', () => hinting.value = false);

export default function ScrollHint() {

    return (
        <>
          { hinting.value && window.scrollY == 0 ? (
            <div class="fixed bottom-0 md:flex flex-col items-center w-full text-accent hidden" onScroll={() => hinting.value = false}>
              <div class="i-tabler-chevron-down text-6xl animate-bounce"></div>
            </div>
          ) : null }
        </>
    );
}