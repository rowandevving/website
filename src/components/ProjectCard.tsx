export default function ProjectCard(props: any) {

  const getLabel = (icon:string) => {
    const segment = icon.split("-");
    const label = segment[segment.length - 1];
  
    return label;
  }

    return (
      <>
        <div class="bg-secondary p-5 w-full hover:translate-y--3 rounded-xl lg:w-1/4 transition duration-500 ease-out mr-10 mb-10 flex flex-col hover:shadow-2xl">
          <h1 class="text-3xl font-bold m-0 md:w-full">{props.name}</h1>
          <p class="text-dull mt-2 mb-3">
            {props.description}
          </p>
          <div class="m-0 flex items-center mt-auto">
          {props.links.map((link:any, index:number) => (
            <a href={link.url} class="visited:text-inherit text-inherit" aria-label={getLabel(link.icon)}>
              <div class={link.icon + " text-3xl hover:text-dull transition-colors duration-500 mr-3"} key={index}/>
            </a>
          ))}
          </div>
        </div>
      </>
    );
  }