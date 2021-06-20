// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price or status, depending on the second parameter that your program received. Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.
// Input
// Your program will receive two parameters - an array of strings and a single string.
// Output
// Return a sorted array of all the tickets that where registered.

// 1-st way
// function tickets(arr, criteria) {
//     function splitLine(line) {
//         return line.split('|');
//     }

//     function convertToTicket([destination, price, status]) {
//         return new Ticket(destination, Number(price), status)
//     }

//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination,
//                 this.price = price, 
//                 this.status = status
//         }
//     }

//     const sortMapper = {
//         'destination': (a, b) => a.destination.localeCompare(b.destination),
//         'price': (a, b) => a.price - b.price,
//         'status': (a, b) => a.status.localeCompare(b.status),
//     }

//     return arr.map(splitLine)
//         .map(convertToTicket)
//         .sort(sortMapper[criteria])
// }

// 2-nd way
function solve(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }

    let tickets = [];
    for (let index = 0; index < ticketsArr.length; index++) {
        let [destination, price, status] = ticketsArr[index].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => a.compareTo(b, sortingCriteria));
    return tickets;
}

solve(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination"
);