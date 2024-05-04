import { signal } from "@preact/signals";

const navToggle = signal(false);
const pos = signal({left: "-100%"});
let timeout = false

const toggleNav = async () => {
  if (!timeout) {
    if (navToggle.value) {
      pos.value = {left: "-100%"};
      await new Promise(resolve => setTimeout(resolve, 500));
      navToggle.value = !navToggle.value
    } else {
      navToggle.value = !navToggle.value
      await new Promise(resolve => setTimeout(resolve, 1));
      pos.value = {left: "0"};
    }
  timeout = true
  await new Promise(resolve => setTimeout(resolve, 300));
  timeout = false

  }
}

export default function Header(props: any) {

    return (
      <>
          <div class="lg:h-20 h-30 bg-base flex items-center text-accent p-10">
            <h1 class="text-4xl lg:w-full w-1/2 font-bold mt--2">
              rowan
            </h1>
            <div class="ml-auto mr-3 lg:mr-0 flex-row hidden md:flex scale-115 lg:scale-100">
            {props.links.map((link:any, index:number) => (
              <a href={link.url} class="visited:text-inherit text-inherit" aria-label={link.name}>
                  <div class={link.icon + " text-4xl hover:text-dull transition-colors duration-500 lg:ml-8 ml-6"} key={index}/>
              </a>
            ))}
            </div>
            <div class="ml-auto mr-3 md:hidden block text-4xl scale-115 i-tabler-menu active:scale-100 transition-transform duration-300" onClick={toggleNav}/>
          </div>
        { navToggle.value ? (
          <div class="h-screen w-full bg-base_bright fixed top-0 left-0 z-1 p-10 text-accent transition-all duration-700 linear" style={pos.value}>
            <div class="flex flex-row items-center h-30 mt--10">
              <div class="ml-auto i-tabler-x text-4xl mr-3 scale-115 active:scale-100 transition-transform duration-300" onClick={toggleNav}/>
            </div>
            <div class="mt-10 flex flex-col items-center">
              {props.links.map((link:any, index:number) => (
                <a href={link.url} class="visited:text-inherit text-inherit flex flex-row text-4xl font-medium" aria-label={link.name}>
                  <div class={link.icon + " mb-10 hover:text-dull transition-colors duration-500 lg:ml-8"} key={index}/>
                  <div class="ml-5">
                    {link.name}
                  </div>
                  <div class="ml-1 i-tabler-arrow-up-right text-3xl relative top-1.5"/>
                </a>
              ))}
            </div>
          </div>
        ) : null }
      </>
    )
  }