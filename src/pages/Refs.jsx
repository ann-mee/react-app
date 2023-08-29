import React, { useRef } from "react";

const Refs = () => {
  const messageRef = useRef(null);
  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    scrollToTop();
  };

  const scrollToTop = () =>
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div className="container mx-auto py-10" ref={containerRef}>
      <h1 className="text-4xl font-bold">Sample page with form</h1>
      <div className="w-1/2 mx-auto py-10 text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
          metus, dignissim vel placerat nec, sagittis eget mi. Aenean elementum,
          lorem in dignissim pellentesque, sapien mi viverra libero, porta
          luctus augue felis interdum lorem. Aliquam posuere vehicula erat
          luctus facilisis. Ut mi odio, dapibus eu ante eleifend, consequat
          consectetur turpis. Vivamus a elementum tortor. Donec leo quam, ornare
          et massa vel, vulputate fermentum nibh. Aliquam tempus feugiat felis a
          pulvinar.
        </p>
        <p className="mt-10">
          In lobortis justo in risus porttitor venenatis. Mauris id odio eu ante
          vulputate maximus et nec nunc. Praesent quis nulla metus. Duis
          imperdiet tincidunt leo, et commodo justo congue sit amet. Nam eu
          venenatis lacus. Morbi et sapien est. Integer fringilla aliquam eros,
          a scelerisque magna hendrerit ut. Duis odio mi, commodo in malesuada
          nec, sodales eget tortor. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Donec felis justo, lacinia et lacus et, venenatis
          rhoncus turpis. Aenean ut turpis neque. Sed odio dolor, commodo et
          nunc in, dictum porta enim. Suspendisse id justo vehicula, semper
          justo ac, rutrum tellus. Sed sed finibus mauris.
        </p>

        <h2 className="text-2xl font-bold mt-20 mb-5">Form</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col text-base font-semibold">
            Email:
            <input
              type="email"
              name="email"
              className="border border-gray-200 font-normal py-2 px-4 rounded-md"
            />
          </label>
          <label className="flex flex-col text-base font-semibold">
            Name:
            <input
              type="text"
              name="name"
              className="border border-gray-200 font-normal py-2 px-4 rounded-md"
            />
          </label>
          <label className="flex flex-col text-base font-semibold">
            Options:
            <select
              name="option"
              className="relative block w-full rounded-md border-0 bg-transparent py-3 ring-1 ring-inset ring-gray-200 focus:z-10  sm:text-sm sm:leading-6"
            >
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <label className="flex flex-col text-base font-semibold">
            Message:
            <textarea
              name="message"
              rows="7"
              className="border border-gray-200 font-normal py-2 px-4 rounded-md"
              ref={messageRef}
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="cursor-pointer bg-slate-500 text-white rounded-md py-4 mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Refs;
