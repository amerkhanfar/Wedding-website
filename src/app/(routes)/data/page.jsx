"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function DemoPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const attendance = await axios.get(
        "https://sdg-signture-default-rtdb.firebaseio.com/attendance.json"
      );
      const attendanceData = attendance.data;

      const transformedData = Object.keys(attendanceData).map((key) => {
        const item = attendanceData[key];

        return {
          id: key.slice(1), // Assuming you want to remove the '-' from the id
          name: item.name,
          email: item.email,
          starter: item.starter,
          main: item.main,
          dessert: item.dessert,
          song: item.song,
          notes: item.notes,
        };
      });
      console.log(transformedData);
      setData(transformedData);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    // const interval = setInterval(() => {
    //   getData();
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <Continer>
      <Table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Starter</Th>
          <Th>Main</Th>
          <Th>Dessert</Th>
          <Th>Song</Th>
          <Th>Notes</Th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <Td>{index + 1}</Td>
              <Td
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                {item.name}
              </Td>
              <Td>{item.email}</Td>
              <Td>{item.starter}</Td>
              <Td>{item.main}</Td>
              <Td>{item.dessert}</Td>
              <Td>{item.song}</Td>
              <Td>{item.notes}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Continer>
  );
}

const Continer = styled.div`
  width: 50vw;
  overflow-x: scroll;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const Table = styled.table`
  border: 1px solid black;
  overflow-x: scroll;
  border-collapse: collapse;
  width: 100%;
  height: fit-content;
  margin-top: 200px;
`;

const Td = styled.td`
  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  padding: 5px;
`;

const Th = styled.td`
  border: 1px solid black;
  padding: 5px;
  white-space: nowrap;
`;
