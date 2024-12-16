import {Button, TableCell, TableRow} from "@mui/material";

export default function ResultTableRow(){
  return(
    <>

      <TableRow>
        <TableCell>
          <img src="https://sps-opendata.pilotsmartke.gov.hk/rest/getRendition/fs-1%3A693265207413252869411532657339312395903827562313.JPG/square.png"/>
        </TableCell>
        <TableCell>Kai Tak Cruise Terminal Car Park 1</TableCell>
        <TableCell>1st floor, Kai Tak Cruise Terminal, 33 Shing Fung Road, Kowloon Bay, KLN</TableCell>
        <TableCell>0</TableCell>
        <TableCell><Button variant="outlined">MAP</Button></TableCell>
      </TableRow>
    </>
  )
}