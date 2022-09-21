import { ErrorMessage, Field, Form, Formik } from "formik";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";
import { Router, useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <img
        src="/time-machine.webp"
        alt=""
        className="w-full h-96 object-top object-cover"
      />
      <div className="mx-auto max-w-screen-md w-full -translate-y-36 -mb-28">
        <div className="rounded-xl bg-gray-50 shadow-2xl p-8">
          <h1 className="font-semibold text-xl mb-4">Where to?</h1>
          <Formik
            initialValues={{ from: "", to: "", roundtrip: true }}
            onSubmit={(v) => {
              const storage = JSON.parse(localStorage.getItem("bookings"));
              console.log(storage)
              if (storage == null) {
                localStorage.setItem("bookings", JSON.stringify([v]));
                console.log(JSON.stringify([v]))
              } else {
                const storageNew = storage.push(v)
                localStorage.setItem("bookings", JSON.stringify(storage));
                console.log(storage)
                
              }

              router.push("/bookings");
            }}
            validationSchema={Yup.object({
              from: Yup.date().required(),
              to: Yup.date().required(),
              roundtrip: Yup.boolean().required(),
            })}
          >
            {(values) => (
              <Form>
                <div className="flex items-end">
                  <label htmlFor="from" className="flex flex-col">
                    Departure
                    <Field
                      type="date"
                      name="from"
                      className="rounded-lg bg-gray-200 py-1 px-2 font-medium"
                    />
                    <span className="text-red-500 text-sm">
                      <ErrorMessage name="from" />
                    </span>
                  </label>
                  <label htmlFor="to" className="flex flex-col ml-4">
                    Arrival
                    <Field
                      type="date"
                      name="to"
                      className="rounded-lg bg-gray-200 py-1 px-2 font-medium"
                    />
                    <span className="text-red-500 text-sm">
                      <ErrorMessage name="to" />
                    </span>
                  </label>
                  <label
                    htmlFor="roundtrip"
                    className="flex ml-auto rounded-lg cursor-pointer bg-gray-200 py-1 px-2 font-medium items-center"
                  >
                    Roundtrip
                    <Field
                      type="checkbox"
                      name="roundtrip"
                      className="ml-2"
                      id="roundtrip"
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    <ErrorMessage name="roundtrip" />
                  </span>
                </div>
                <button
                  type="submit"
                  className={
                    "mt-8 rounded-lg font-semibold px-3 py-1.5 ransition  " +
                    (Object.keys(values.errors).length != 0 ||
                    values.values.from == ""
                      ? "text-gray-700 bg-gray-200 "
                      : "bg-purple-500 text-gray-100")
                  }
                >
                  Let&apos;s Go!
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <section className="max-w-2xl mx-auto">
          <h2 className="font-medium text-lg mt-14">What&apos;s popular</h2>
          <div className="grid gap-12 grid-cols-2 mt-5">
            <Card name="The Moon Heads from Earth" image="/million.webp" />
            <Card name="The End of the World" image="/end.webp" />
            <Card name="Humanity in 200 Years" image="/future.webp" />
            <Card name="The Tea Party of the Future" image="/tea.webp" />
          </div>
        </section>
      </div>
    </Layout>
  );
}

function Card(props: { name: string; image: string }) {
  return (
    <div
      className="rounded-xl shadow-2xl bg-gray-100 aspect-square bg-center bg-cover p-4 relative flex"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black z-0 via-transparent to-transparent rounded-b-xl"></div>
      <h3 className="text-white text-2xl font-bold mt-auto z-10">
        {props.name}
      </h3>
    </div>
  );
}
