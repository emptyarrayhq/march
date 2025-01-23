// import Image, { type ImageProps } from "next/image";
// import { Button } from "@repo/ui/button";

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home() {
  return (
  <div className="min-h-screen flex items-center justify-center text- red-500">
    <h1 className="text-center">welcome here!!</h1>
  </div>
  );
}
