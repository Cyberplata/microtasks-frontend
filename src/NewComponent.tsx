import React from 'react';

type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {

    const topCars: TopCarsType[] = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        // <>
        //     <div>new component</div>
        //
        //     <ul>
        //         {props.students.map(student => {
        //             return (
        //                 <li key={student.id}>
        //                     {student.name}, {student.age}
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // </>

        // <ul>
        //     {props.students.map((ObjectFromStudentArray, index) => {
        //         return (
        //
        //             <li key={ObjectFromStudentArray.id}>
        //                 <span>{ObjectFromStudentArray.name}</span>
        //                 <span>  age: {ObjectFromStudentArray.age}</span>
        //             </li>
        //
        //         )
        //     })}
        // </ul>

        // <table>
        //     <tr>
        //         <th>Month</th>
        //         <th>Savings</th>
        //     </tr>
        //     <tr>
        //         <td>January</td>
        //         <td>$100</td>
        //     </tr>
        //     <tr>
        //         <td>February</td>
        //         <td>$80</td>
        //     </tr>
        // </table>

        <table>
            <tr>
                <th>Month</th>
                <th>Savings</th>
            </tr>
            {topCars.map((car, index) => {
                return (
                    <tr>
                        <td key={index}>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};