    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     "& > :not(style)": {
    //       m: 1,
    //       width: "99%",
    //     },
    //     padding: "1%",
    //   }}
    // >
    //   <Paper elevation={3}>
    //     <header>EMI Calculator</header>

    //     <Grid item container sx={{ flexGrow: 1 }} spacing={15} padding={5}>
    //       <Grid item container xs={6}>
    //         <Grid item xs={12}>
    //           <InputSlider name={"Loan Amount"} setValue={setloanAmount} vlaue={loanAmount} max={500}/>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <InputSlider name={"loan Rate"} setValue={setloanRate} vlaue={loanRate} max={100}/>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <InputSlider name={"Loan Term"} setValue={setLoanTerm} value={LoanTerm} max={20}/>
    //         </Grid>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Paper elevation={3} sx={{width:"60%"}} square>
    //         <DoughnutChart data={data} label={["Loan Amount","loanRate Rate","Loan Term"]}></DoughnutChart>
    //         <div style={{display:'flex', flexDirection:'row'}}>
    //             <div style={{border:'1px solid black', borderRadius: 10, padding: '5px', margin:'10px'}}>
    //               <p>Monthly EMI</p>
    //               <p>{emi.toLocaleString('EN-IN')} / Month</p>
    //             </div>
    //             <div style={{border:'1px solid black', borderRadius: 10, padding: '5px',  margin:'10px'}}>
    //               <p>Principle</p>
    //               <p>{loanAmount.toLocaleString('EN-IN')}</p>
    //             </div>
    //             <div style={{border:'1px solid black', borderRadius: 10, padding: '5px',  margin:'10px'}}>
    //               <p>loan Rate Payable</p>
    //               <p>{extraloanRate.toLocaleString('EN-IN')}</p>
    //             </div>
    //           </div>
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </Box>