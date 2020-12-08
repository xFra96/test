import React from "react";
import { DatePicker } from "antd";
import { parseCookies } from "nookies";

export default function Home() {
  const cookies = parseCookies();
  const appCookie = cookies.app || false;

  const addDate = async (data) => {
    const payload = {
      testdata: data,
    };
    try {
      const response = await fetch("https://api.fraspg.it/tests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${appCookie}`,
        },
        body: JSON.stringify(payload),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-md-12">
          <DatePicker
            onChange={(date, dateString) => {
              console.log(date.toDate());
              addDate(date);
              setStartDate(date);
            }}
          />
        </div>
      </div>
    </div>
  );
}
