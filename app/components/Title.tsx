export default function Title(props: { title: string }) {
  return (
    <div className="flex justify-center md:justify-start items-center gap-4 w-full md:w-auto">
      <h1 className="flex gap-4 text-5xl font-bold tracking-wide">
        <p><span className="text-cyan-500">/</span>{props.title}</p>
      </h1>
    </div>
  );
}
