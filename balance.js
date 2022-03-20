function Balance(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const ctx = React.useContext(UserContext);  
    return (
      <Card
        bgcolor="info"
        header="Balance"
        status={status}
        body={show ? (  
                <>
                Balance<br/>
                <h3>{balance}</h3>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}></button>
                </>
              )}
      />
    )
  }
  