import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@material-ui/core";
  import React, {  useState } from "react";
  import NavBar from "../components/NavBar";
  import { useConstructor } from "../core/constants";
  import { GetCustomers } from "../core/requests";

  const tableFields= ["Customer Name", "Current Fines", "Toal Checkouts"];

  
  function PatronPage() {
    const [customers, setCustomers] = useState([]);

    const loadItems = async () => {
      let allCustomers = await GetCustomers();
      const customerList = [];
  
      allCustomers.customers.map((x) => {
        customerList.push(x);
        return customerList;
      })
      setCustomers(customerList);
    }
    
    useConstructor(() => loadItems());

    let fields = tableFields;
  
    return (
      <>
        <NavBar />
        <Container maxWidth="md">
          <Paper style={{ margin: 32, padding: 32 }}>            
            <Container maxWidth="md">
            <TableContainer style={{ margin: 15, padding: 15 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {fields.map((field) => (
                      <TableCell key={field}>{field}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((row) => (
                    <TableRow key={row.name}>
                      {fields.map((field) => (
                        <TableCell scope = "row">{row[field]}</TableCell>
                      ))}
                    </TableRow>
                  ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
            </Container>           
          </Paper>
        </Container>
      </>
    );
  }
  
  export default PatronPage;
  