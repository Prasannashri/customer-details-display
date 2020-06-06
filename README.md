# customer-details-display

Clone the respository and install the packages.
The packages used other than CREATE-REACT-APP are axios,json-server.
First run the server using the following command,
	"json-server --watch server/customer-data.json"
(The API(mockAPI) will hosted  be hosted at port 5000,
  check out http://localhost:5000/customers for API)
Then Run the react app using  "npm start"

USAGE:
On landing Page ,Click the Fetch Customers button to fetch the customers from API and display it in container.
Then Click on each row of the customer to see the address of that customer.
