import React, { useState } from 'react';

function MyComponent() {
    // useState hook'u kullanarak, bileşenin durumunu yönetmek için person adında bir durum değişkeni tanımlanır.
    // Bu durum değişkeni, name, cardNumber, exp ve code olmak üzere dört farklı alan içerir.
    const [person, setPerson] = useState({ name: '', cardNumber: '', exp: '', code: '' });

    // handleChange fonksiyonu, input alanlarının değerleri değiştikçe çağrılan bir fonksiyondur.
    // Bu fonksiyon, input alanlarındaki değerlerin güncellenmesini sağlar.
    const handleChange = (e) => {
        // Kullanıcının exp alanına maksimum 4 karakter girmesini sağlar.
        const { name, value } = e.target;
        if (name === "exp" && value.length > 4) {
            return;
        }
        // Kullanıcının code alanına maksimum 3 karakter girmesini sağlar.
        if (name === "code" && value.length > 3) {
            return;
        }

        // Input alanındaki değerler, setPerson ile person durum değişkenine atanır.
        // Bu sayede, input alanlarındaki değerler her değiştiğinde person durum değişkeni güncellenir.
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    return (
        <div className='credit-card'>
            <div className='card-design'>
                <div className='content'>
                    <div className='chip'></div>
                    <div className='card-code'>
                        <span className='title'>
                            Card Number
                        </span>
                        <p className='output-title'>{person.cardNumber}</p>
                    </div>


                    <div className='column'>
                        <div className='full-name'>
                            <span className='title'>
                                Full Name
                            </span>
                            <p className='output-title'>{person.fullName}</p>
                        </div>
                        <div className='exp-date'>
                            <span className='title'>
                                Exp
                            </span>
                            <p className='output-title'>{person.exp}</p>
                        </div>
                    </div>

                </div>
            </div>
            <p>
                fullName:
                <input type="text" name="fullName" value={person.fullName} onChange={handleChange} />
            </p>
            <p>
                cardNumber:
                <input type="number" name="cardNumber" max="999" value={person.cardNumber} onChange={handleChange} />
            </p>
            <p>
                Exp:
                <input type="number" name="exp" max="999" value={person.exp} onChange={handleChange} />
            </p>
            <p>Code:
                <input type="number" name="code" max="999" value={person.code} onChange={handleChange} />
            </p>
        </div>
    );
}

export default MyComponent;