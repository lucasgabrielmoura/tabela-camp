import React, { useEffect } from "react";
import Head from '../Head/index'
import { Artigo } from "./style";

const Article = () => {

    //fazer pro TH tbm

    useEffect(() => {
        let td = document.querySelectorAll("td");

        for (let n = 0; n <= td.length - 1; n++) {
            let att = td[n].innerHTML;
            if (att.startsWith('-')) {
                td[n].setAttribute('class', 'negative')
            }
            if (att.startsWith('+')) {
                td[n].setAttribute('class', 'positive')
            }
        }
    })



    return (
        <>
            <Head />
            <Artigo>
                <table>
                    <thead>
                        <td>Team</td>
                        <td>Competition</td>
                        <td>Points</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="positive">+10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="negative">-10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="positive">+10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="positive">+10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="positive">+10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="negative">-10</td>
                        </tr>
                        <tr>
                            <td>SK</td>
                            <td>WSL</td>
                            <td className="negative">-10</td>
                        </tr>
                    </tbody>
                </table>
            </Artigo>
        </>
    )
}

export default Article