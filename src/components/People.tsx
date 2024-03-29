export default function People(props: any) {

  return (

    <>
      <div class="flex flex-row flex-wrap w-full">
        {props.people.map((item:any, index:number) => (
          <a href={item.link} class="relative m-3 lg:w-45 lg:h-45 md:h-35 md:w-35 h-25 w-25">
            <div class="
            rounded-full border-dashed border-4 border-primary hover:border-dull focus:border-dull
            transition-all duration-500 w-full h-full
            animate-[spin_25s_linear_infinite] keyframes-spin
            "/>
            <img src={item.image} class="rounded-full absolute top-0 left-0 scale-90 pointer-events-none" key={index}/>
          </a>
        ))}
      </div>
    </>
  )
}