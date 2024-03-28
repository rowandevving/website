import { signal } from "@preact/signals";

const navToggle = signal(false);

export default function Header(props: any) {

    return (
      <>
        { !navToggle.value ? (
          <div class="lg:h-20 h-30 bg-base flex items-center text-accent p-10">
            <h1 class="text-4xl lg:w-full w-1/2 font-bold mt--2">
              rowan
            </h1>
            <div class="ml-auto mr-3 lg:mr-0 flex-row hidden md:flex scale-115 lg:scale-100">
            {props.links.map((link:any, index:number) => (
              <a href={link.url} class="visited:text-inherit text-inherit">
                  <div class={link.icon + " text-4xl hover:text-dull transition-colors duration-500 lg:ml-8 ml-6"} key={index}/>
              </a>
            ))}
            </div>
            <div class="ml-auto mr-3 md:hidden block text-4xl scale-115 i-tabler-menu" onClick={() => navToggle.value = !navToggle.value}/>
          </div>
        ) : null }
        { navToggle.value ? (
          <div class="h-screen w-full bg-primary fixed z-1 p-10 text-accent">
            <div class="flex flex-row items-center h-30 mt--10">
              <div class="ml-auto i-tabler-x text-4xl mr-3 scale-115" onClick={() => navToggle.value = !navToggle.value}></div>
            </div>
            <div class="mt-10 flex flex-col items-center">
              {props.links.map((link:any, index:number) => (
                <a href={link.url} class="visited:text-inherit text-inherit flex flex-row text-4xl font-medium">
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