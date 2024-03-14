export default function Header(props: any) {

    return (
      <>
        <div className="lg:h-20 h-30 bg-base flex items-center text-text p-10">
          <h1 className="text-4xl lg:w-full w-1/2 font-bold mt--2">
            rowan
          </h1>
          <div className="ml-auto flex flex-row">
          {props.links.map((link:any, index:number) => (
            <a href={link.url} className="visited:text-inherit text-inherit">
                <div className={link.icon + " text-4xl hover:text-dull transition-colors duration-500 lg:ml-8 ml-6"} key={index}/>
            </a>
          ))}
          </div>
        </div>
      </>
    )
  }