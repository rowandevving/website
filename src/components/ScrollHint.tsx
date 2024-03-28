import { signal } from "@preact/signals";

const hinting = signal(true);

window.addEventListener('scroll', () => hinting.value = false);

export default function ScrollHint() {

    return (
        <>
          { hinting.value && window.scrollY == 0 ? (
            <div class="fixed bottom-0 flex flex-col items-center w-full text-accent" onScroll={() => hinting.value = false}>
              <div class="i-tabler-chevron-down lg:text-6xl lg:opacity-100 animate-bounce text-5xl opacity-60"></div>
            </div>
          ) : null }
        </>
    );
}