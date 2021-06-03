export default function Login() {

    function submit(e) {
        e.preventDefault();

        fetch('http://localhost:4000/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: '{ "email": "mgg@gmail.com", "password": "1234"}'
            })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
    
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}