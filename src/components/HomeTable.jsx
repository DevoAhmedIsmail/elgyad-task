import React from "react";

const HomeTable = () => {
  return (
    <div style={{
        overflowX:"auto",
        maxWidth:"100vw",
      }}>

      <table id="home-table">
        <thead>
          <tr>
            <th>رقم الحساب</th>
            <th>اسم الحساب</th>
            <th>يناير</th>
            <th>فبراير</th>
            <th>مارس</th>
            <th>ابريل</th>
            <th>مايو</th>
            <th>يونيو</th>
            <th>يوليو</th>
            <th>أغسطس</th>
            <th>سبتمبر</th>
            <th>أكتوبر</th>
            <th>نوفمبر</th>
            <th>ديسمبر</th>
            <th>الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>102010008</th>
            <th>شركة الرشيد التجارية - رشيد قاسم</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>11.856.70</th>
            <th>119.03</th>
            <th>-300.00</th>
            <th>-200.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>0.00</th>
            <th>11.457.73</th>
          </tr>

          <tr>
            <th colspan="2">الإجمالي</th>
            <th>
              <th>يناير</th>
              <th>0.00</th>
            </th>
            <th>
              <th>فبراير</th>
              <th>0.00</th>
            </th>
            <th>
              <th>مارس</th>
              <th>11.856.70</th>
            </th>
            <th>
              <th>ابريل</th>
              <th>119.03</th>
            </th>
            <th>
              <th>مايو</th>
              <th>-300.00</th>
            </th>
            <th>
              <th>يونيو</th>
              <th>-200.00</th>
            </th>
            <th>
              <th>يوليو</th>
              <th>0.00</th>
            </th>
            <th>
              <th>أغسطس</th>
              <th>0.00</th>
            </th>
            <th>
              <th>سبتمبر</th>
              <th>0.00</th>
            </th>
            <th>
              <th>أكتوبر</th>
              <th>0.00</th>
            </th>
            <th>
              <th>نوفمبر</th>
              <th>0.00</th>
            </th>
            <th>
              <th>ديسمبر</th>
              <th>0.00</th>
            </th>
            <th>
              <th>الإجمالي</th>
              <th>11.457.73</th>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
