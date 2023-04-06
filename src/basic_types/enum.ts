// enum Month {
//     Jan,
//     Feb,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     Jul,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec,
// }

// console.log(Month.Jun); //5
// console.log(Month.Jan); //0

//Specifying enum members’ numbers
enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
}

console.log(Month.Jun); //6
console.log(Month.Jan); //1

//Example enum
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected,
}

const request: { id: number; status: number; description: string } = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request',
};

if (request.status === ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}
