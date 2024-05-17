import { signal } from "@preact/signals";

const bounding = signal<DOMRect | null>(null);

export default function ProjectCard(props: any) {

  const getLabel = (icon:string) => {
    const segment = icon.split("-");
    const label = segment[segment.length - 1];
  
    return label;
  }

  const calcTilt = (ev: any) => {
    if (!bounding.value) return;
    const x = ev.clientX - bounding.value.left;
    const y = ev.clientY - bounding.value.top;

    const xFract = x / bounding.value.width;
    const yFract = y / bounding.value.height;

    const xRot = (xFract - 0.5) * 20;
    const yRot = (yFract - 0.5) * 20;
    
    ev.currentTarget.style.setProperty("--y-rot", `${xRot}deg`);
    ev.currentTarget.style.setProperty("--x-rot", `${0.5-yRot}deg`);
  }

    return (
      <>
      <div class="w-full lg:w-23% mr-10 mb-10 perspective-800px">
        <div class="bg-gradient-to-b from-dull to-90% rounded-xl hover:shadow-2xl transition ease-out duration-1500 h-full flex flex-col p-[1px] hover:[transform:rotateX(var(--x-rot))_rotateY(var(--y-rot))_scale(1.04)]"
        onMouseLeave={() => (bounding.value = null)}
        onMouseEnter={(ev) => {bounding.value = ev.currentTarget.getBoundingClientRect()}}
        onMouseMove={(ev) => {calcTilt(ev)}}
        >
          <div class="bg-secondary w-full p-5 h-full rounded-inherit">
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
        </div>
      </div>
      </>
    );
  }