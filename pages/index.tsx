import { ErrorMessage, Field, Form, Formik } from "formik";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";

export default function Home() {
  return (
    <Layout>
      <img
        src="/time-machine.webp"
        alt=""
        className="w-full h-96 object-top object-cover"
      />
      <div className="mx-auto max-w-screen-md w-full -translate-y-36">
        <div className="rounded-xl bg-gray-50 shadow-2xl p-8">
          <h1 className="font-semibold text-xl mb-4">Where to?</h1>
          <Formik
            initialValues={{ from: "", to: "", roundtrip: true }}
            onSubmit={(v) => console.log(v)}
            validationSchema={Yup.object({
              from: Yup.date().required(),
              to: Yup.date().required(),
              roundtrip: Yup.boolean().required()
            })}
          >
            {(values) => (
              <Form>
                <div className="flex items-end">
                  <label htmlFor="from" className="flex flex-col">
                    Departure
                    <Field type="date" name="from" className="rounded-lg bg-gray-200 py-1 px-2 font-medium" />
                    <span className="text-red-500 text-sm">
                    <ErrorMessage name="from" />
                    </span>
                  </label>
                  <label htmlFor="to" className="flex flex-col ml-4">
                    Arrival
                    <Field type="date" name="to" className="rounded-lg bg-gray-200 py-1 px-2 font-medium" />
                    <span className="text-red-500 text-sm">
                    <ErrorMessage name="to" />
                    </span>
                  </label>
                  <label htmlFor="roundtrip"  className="flex ml-auto rounded-lg bg-gray-200 py-1 px-2 font-medium items-center">
                    Roundtrip
                    <Field type="checkbox" name="roundtrip" className="ml-2" id="roundtrip" />
                    
                  </label>
                  <span className="text-red-500 text-sm">
                  <ErrorMessage name="roundtrip"  />
                  </span>
                </div>
                <button type="submit" className={"mt-8 rounded-lg font-semibold px-3 py-1.5 ransition  " + (Object.keys(values.errors).length != 0 || values.values.from == "" ? "text-gray-700 bg-gray-200 " : "bg-purple-500 text-gray-100")}>Let's Go!</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
