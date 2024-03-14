export default function Header(props: any) {

    return (
      <>
        <div class="lg:h-20 h-30 bg-base flex items-center text-text p-10">
          <h1 class="text-4xl lg:w-full w-1/2 font-bold mt--2">
            rowan
          </h1>
          <div class="ml-auto flex flex-row">
          {props.links.map((link:any, index:number) => (
            <a href={link.url} class="visited:text-inherit text-inherit">
                <div class={link.icon + " text-4xl hover:text-dull transition-colors duration-500 lg:ml-8 ml-6"} key={index}/>
            </a>
          ))}
          </div>
        </div>
      </>
    )
  }