import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AttributesTable = ({ rows }) => (
  <TableContainer
    component={Paper}
    style={{ marginTop: "20px", width: "80%", backgroundColor: "#1a1a1a" }}
  >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
            ID
          </TableCell>
          <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
            Attributes
          </TableCell>
          <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
            TokenURI
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell align="center" sx={{ color: "white" }}>
              <div>{row.id.toString()}</div>
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              {JSON.stringify(row.metadata.attributes)}
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              <div>{row.tokenURI.toString()}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AttributesTable;
