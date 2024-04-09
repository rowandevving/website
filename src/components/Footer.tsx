export default function Footer() {

  const emoji = (): String => {
    const roll = Math.floor(Math.random() * 100);
    if (roll < 20) {
      return '🏳️‍🌈'
    } else if (roll < 25) {
      return '🐸'
    } else {
      return '💖'
    }
  }

  return (
    <>
      <div class="lg:h-20 h-30 bg-base flex items-center p-10 w-full w-1/2 lg:text-lg text-xl text-dull flex-row">
        <span class="md:block hidden">© {new Date().getFullYear()}</span>
        <span class="text-accent md:block hidden">&nbsp; Made with {emoji()} by rowan &nbsp;</span>
        <span class="md:block hidden"> · &nbsp;</span>   
        <a href="https://github.com/rowandevving/rowan.pages.dev" class="decoration-underline md:block hidden">Source</a>
        <div class="md:hidden flex flex-col">
          <p>© {new Date().getFullYear()}</p>
          <p class="text-accent">Made with {emoji()} by rowan</p>
        </div>
        <div class="ml-auto md:flex flex-row hidden">
          Powered by
          <div class="text-xl flex flex-row items-center">
            <a href="https://astro.build" class="i-simple-icons-astro ml-3 hover:text-accent transition-colors duration-500" aria-label="astro"/>
            <a href="https://preactjs.com" class="i-simple-icons-preact ml-3 hover:text-accent transition-colors duration-500" aria-label="preact"/>
            <a href="https://unocss.dev" class="i-simple-icons-unocss ml-3 hover:text-accent transition-colors duration-500" aria-label="unocss"/>
          </div>
        </div>
      </div>
    </>
  )
}