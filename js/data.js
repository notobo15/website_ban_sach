const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

var books = [
  {
    id: 1,
    category: "skill_books",
    author: "",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    shortName: "muon thanh cong noi khong voi tri hoan",
    srcImg: [
      "./images/skill_books/1.jpg",
      "./images/skill_books/1_1.jpg",
      "./images/skill_books/1_2.jpg",
      "./images/skill_books/1_3.jpg",
    ],
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
    price: 85200,
    currentPrice: 10000,
  },
  {
    id: 2,
    category: "skill_books",
    c: "",
    title: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải(Tái Bản)",
    shortName: "thien tai bai trai ke dien ben phai",
    srcImg: [
      "./images/skill_books/2.jpg",
      "./images/skill_books/2.jpg",
      "./images/skill_books/3.jpg",
      "./images/skill_books/4.jpg",
    ],
    price: 85200,
    currentPrice: 20000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 3,
    category: "skill_books",
    author: "Damon Zahariades",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    shortName: "muon thanh cong noi khong voi tri hoan",
    srcImg: [
      "./images/skill_books/3.jpg",
      "./images/skill_books/4.jpg",
      "./images/skill_books/4.jpg",
    ],
    price: 85200,
    currentPrice: 30000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 4,
    category: "skill_books",
    author: "Matthew Pollard, Derek Lewis",
    title: "Nghệ Thuật Bán Hàng Của Người Hướng Nội",
    shortName: "nghe thuat ban hang cua nguoi huong noi",

    srcImg: ["./images/skill_books/4.jpg"],
    price: 85200,
    currentPrice: 40000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 5,
    category: "skill_books",
    author: "Stephen R. Covey",
    title:
      "7 Thói Quen Hiệu Quả (The 7 Habits Of Highly Effective People) (Tái Bản)",
    shortName: "7(bay) thoi quen hieu qua",
    srcImg: ["./images/skill_books/5.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 6,
    category: "skill_books",
    author: "Trác Nhã",
    title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ ( Tái Bản )",
    shortName: "kheo an noi se co duoc thien ha",
    srcImg: ["./images/skill_books/6.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 7,
    category: "skill_books",
    author: "Adam Khoo",
    title: "Tôi Tài Giỏi - Bạn Cũng Thế (Tái Bản 2020)",
    shortName: "toi tai gioi ban cung the",
    srcImg: ["./images/skill_books/7.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 8,
    category: "skill_books",
    author: "Gino Wickman, Mark C. Winters",
    title: "Người Có Tầm Nhìn, Kẻ Biết Hành Động",
    shortName: "nguoi co tam nhin ke biet hanh dong",
    srcImg: ["./images/skill_books/8.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 9,
    category: "skill_books",
    author: "Nancy Duarte",
    title: "HBR Guide To – Trình Bày Thuyết Phục (Tái Bản 2018)",
    category: "skill_books",
    shortName: "trinh bai thuyet phuc",
    srcImg: ["./images/skill_books/9.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 10,
    category: "skill_books",
    author: "Prakash Iyer",
    title: "Thói Quen Của Kẻ Thắng (Tái Bản 2018)",
    shortName: "thoi quen cua ke thang",
    srcImg: ["./images/skill_books/10.jpg"],
    price: 85200,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
    currentPrice: 50000,
  },
  {
    id: 11,
    category: "skill_books",
    author: "Zoe McKey",
    title: "Tư Duy Phản Biện",
    shortName: "tu duy phan bien",
    srcImg: ["./images/skill_books/11.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 12,
    category: "skill_books",
    author: "Scott H.Young",
    title: "Rèn Luyện Kỹ Năng Phát Triển Bản Thân",
    shortName: "ren luyen ky nang phap trien ban than",
    srcImg: ["./images/skill_books/12.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 13,
    category: "skill_books",
    author: "nhieu tac gia",
    title: "Thao túng tâm lý",
    shortName: "thao tung tam ly",
    srcImg: ["./images/skill_books/13.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 14,
    category: "skill_books",
    author: "Carol S. Dweck",
    title: "Tâm Lý Học Thành Công",
    shortName: "tam ly hoc thanh cong",
    srcImg: ["./images/skill_books/14.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 15,
    category: "skill_books",
    author: "Eran Katz",
    title: "Trí Tuệ Do Thái (Tái Bản 2018)",
    shortName: "tri tue do thai",
    srcImg: ["./images/skill_books/15.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 16,
    category: "skill_books",
    author: "Tạ Quốc Kế",
    title: "Điềm Tĩnh Và Nóng Giận",
    shortName: "diem tinh va nong gian",
    srcImg: ["./images/skill_books/16.jpg", "./images/skill_books/1.jpg"],
    price: 85200,
    currentPrice: 50000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 101,
    category: "foreign_books",
    author: "Trang Anh",
    title: "30 Chủ Đề Từ Vựng Tiếng Anh (Tập 1)",
    srcImg: ["./images/foreign_books/101.jpg"],
    price: 190000,
    currentPrice: 12000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 102,
    category: "foreign_books",
    author: "Trang Anh",
    title: "30 Chủ Đề Từ Vựng Tiếng Anh (Tập 2)",
    srcImg: ["./images/foreign_books/102.jpg"],
    price: 190000,
    currentPrice: 12000,
    description:
      "Ngữ pháp và từ vựng là hai mảng không thể thiếu trong quá trình học ngoại ngữ nói chung và học tiếng Anh nói riêng. Hai phạm trù này sẽ góp phần giúp chúng ta đạt được sự thành thạo về ngôn ngữ. Nếu như ngữ pháp có các quy tắc, có cấu trúc để tuân theo thì từ vựng lại không có bất cứ quy tắc nào",
  },
  {
    id: 103,
    category: "foreign_books",
    author: "Mai Lan Hương, Hà Thanh Uyên",
    title: "Giải Thích Ngữ Pháp Tiếng Anh (Tái Bản 2022)",
    srcImg: ["./images/foreign_books/103.jpg"],
    price: 220000,
    currentPrice: 143000,
    description:
      "Hy vọng Giải Thích Ngữ Pháp Tiếng Anh sẽ là một quyển sách thiết thực, đáp ứng yêu cầu học, ôn tập và nâng cao trình độ ngữ pháp cho người học và là quyển sách tham khảo bổ ích dành cho giáo viên.",
  },
  {
    id: 104,
    category: "foreign_books",
    author: "Trang Anh",
    title: "25 Chuyên Đề Ngữ Pháp Tiếng Anh Trọng Tâm - Tập 1",
    srcImg: ["./images/foreign_books/104.jpg"],
    price: 110000,
    currentPrice: 79000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 105,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Cẩm Nang Cấu Trúc Tiếng Anh",
    srcImg: ["./images/foreign_books/105.jpg"],
    price: 110000,
    currentPrice: 80000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 106,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Hacker Ielts English",
    srcImg: ["./images/foreign_books/106.jpg"],
    price: 110000,
    currentPrice: 80000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 107,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Mind Map English Grammar",
    srcImg: ["./images/foreign_books/107.jpg"],
    price: 152000,
    currentPrice: 100000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 108,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Developing Skills For The Toeic Test",
    srcImg: ["./images/foreign_books/108.jpg"],
    price: 110000,
    currentPrice: 80000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 109,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Từ Vựng Lelts 8.0 - Từ Vựng Đất Để Đạt Điểm Cao 4 Kỹ Năng",
    srcImg: ["./images/foreign_books/109.jpg"],
    price: 200000,
    currentPrice: 150000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 110,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Cambridge Ielts 16 Academy With Answers",
    category: "foreign_books",
    srcImg: ["./images/foreign_books/110.jpg"],
    price: 800000,
    currentPrice: 600000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 111,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Động từ Bất quy tắc & Ngữ pháp Tiếng anh Căn Bản",
    srcImg: ["./images/foreign_books/111.jpg"],
    price: 250000,
    currentPrice: 100000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 112,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Tự Học 2000 Từ vựng Tiếng Anh theo chủ đề",
    srcImg: ["./images/foreign_books/112.jpg"],
    price: 610000,
    currentPrice: 80000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 113,
    category: "foreign_books",
    author: "Trang Anh",
    title: "600 Động Từ bất quy tắc Và cách dùng các thì trong Tiếng hoa",
    srcImg: ["./images/foreign_books/113.jpg"],
    price: 520000,
    currentPrice: 400000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 114,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Sách tự học Hiragana Katakana",
    srcImg: ["./images/foreign_books/114.jpg"],
    price: 710000,
    currentPrice: 600000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 115,
    category: "foreign_books",
    author: "Trang Anh",
    title: "Ngữ pháp Tiếng Hàn Thông dụng (Sơ cấp)",
    srcImg: ["./images/foreign_books/115.jpg"],
    price: 910000,
    currentPrice: 800000,
    description:
      "Các chuyên đề ngữ pháp trọng tâm được trình bày đơn giản, dễ hiểu cùng với hệ thống bài tập và từ vựng phong phú. Có tất cả 25 chuyên đề trong 2 tập sách, là tài liệu hữu ích cho học sinh, sinh viên, người đi làm, luyện thi cho các kỳ thi quốc gia, ôn luyện các chứng chỉ quốc tế và là tài liệu tham khảo cho giáo viên.",
  },
  {
    id: 201,
    category: "children_books",
    author: "William J Bennett",
    title: "Tuyển Tập Truyện Hay Dành Cho Thiếu Nhi",
    srcImg: ["./images/children_books/201.jpg"],
    price: 100000,
    currentPrice: 50000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 202,
    category: "children_books",
    author: "William J Bennett",
    title: "Tuyển Tập Văn Học Viết Cho Thiếu Nhi - Tô Hoài - 2",
    srcImg: ["./images/children_books/202.jpg"],
    price: 200000,
    currentPrice: 100000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 203,
    category: "children_books",
    author: "William J Bennett",
    title: "Combo Truyện Cổ Tích Việt Nam Dành Cho Thiếu Nhi: Sọ Dừa",
    srcImg: ["./images/children_books/203.jpg"],
    price: 300000,
    currentPrice: 150000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 204,
    category: "children_books",
    author: "William J Bennett",
    title: "Văn Học Thiếu Nhi - Dấu Ấn Thế hệ mới - Đừng giẫm lên cỏ",
    srcImg: ["./images/children_books/203.jpg"],
    price: 400000,
    currentPrice: 200000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 205,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành cho Thiếu Nhi",
    srcImg: ["./images/children_books/205.jpg"],
    price: 500000,
    currentPrice: 200000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 206,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành Cho Thiếu Nhi",
    srcImg: ["./images/children_books/206.jpg"],
    price: 700000,
    currentPrice: 350000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 207,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành cho Thiếu Nhi: Lừa Đội Lốt Sư Tử",
    srcImg: ["./images/children_books/207.jpg"],
    price: 600000,
    currentPrice: 350000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 208,
    category: "children_books",
    author: "William J Bennett",
    title: "Những Truyện Hay Viết Cho Thiếu Nhi - Nguyễn Kiên",
    srcImg: ["./images/children_books/208.jpg"],
    price: 800000,
    currentPrice: 400000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 209,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành Cho Thiếu Nhi: CHuột, Gà trống và mèo",
    srcImg: ["./images/children_books/209.jpg"],
    price: 900000,
    currentPrice: 520000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 210,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành Cho Thiếu Nhi : Bộ Lông mượn",
    srcImg: ["./images/children_books/210.jpg"],
    price: 110000,
    currentPrice: 50000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 211,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Tranh Ngụ Ngôn Dành cho Thiếu Nhi : Cò và sáo",
    srcImg: ["./images/children_books/211.jpg"],
    price: 150000,
    currentPrice: 100000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 212,
    category: "children_books",
    author: "William J Bennett",
    title: "Tủ Sách Vàng - Tác Phẩm Chọn Lọc Dành Cho Thiếu Nhi",
    srcImg: ["./images/children_books/212.jpg"],
    price: 180000,
    currentPrice: 100000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 213,
    category: "children_books",
    author: "William J Bennett",
    title: "Cổ Tích Nhật Bản Dành Cho Thiếu Nhi : Chuyện Kì Lạ về Taro",
    srcImg: ["./images/children_books/213.jpg"],
    price: 200000,
    currentPrice: 100000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 214,
    category: "children_books",
    author: "William J Bennett",
    title: "Combo 10 Vạn Câu hỏi vì sao Dành cho Thiếu Nhi",
    srcImg: ["./images/children_books/214.jpg"],
    price: 350000,
    currentPrice: 150000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 215,
    category: "children_books",
    author: "William J Bennett",
    title: "Truyện Thiếu Nhi Hạt giống Tâm Hồn - Bữa Ăn sáng bằng hồ dán",
    srcImg: ["./images/children_books/215.jpg"],
    price: 450000,
    currentPrice: 300000,
    description:
      "Ngày nay, mối quan tâm hàng đầu của các bậc phụ huynh là làm thế nào để giúp con trẻ phát triển toàn diện, cả về thể chất, tinh thần và trí tuệ",
  },
  {
    id: 301,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế phát triển - Căn bản và Nâng Cao",
    srcImg: ["./images/economic_books/301.jpg"],
    price: 100000,
    currentPrice: 50000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },
  {
    id: 302,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh Tế Học Viking - Cách Bắc Âu Thành Công",
    srcImg: ["./images/economic_books/302.jpg"],
    price: 200000,
    currentPrice: 100000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 303,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Thành Viên",
    srcImg: ["./images/economic_books/303.jpg"],
    price: 300000,
    currentPrice: 150000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 304,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Đêm và Chính Thức",
    srcImg: ["./images/economic_books/304.jpg"],
    price: 400000,
    currentPrice: 200000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 305,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Vĩ Mô (NS Kinh Tế)",
    srcImg: ["./images/economic_books/305.jpg"],
    price: 500000,
    currentPrice: 200000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 306,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Học Dành Cho Đại Chúng",
    srcImg: ["./images/economic_books/306.jpg"],
    price: 600000,
    currentPrice: 530000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 307,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Hậu Covid",
    category: "economic_books",
    srcImg: ["./images/economic_books/307.jpg"],
    price: 700000,
    currentPrice: 350000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 308,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Dành Cho Doanh Nhân",
    srcImg: ["./images/economic_books/308.jpg"],
    price: 800000,
    currentPrice: 500000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 309,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Quốc Tế",
    srcImg: ["./images/economic_books/309.jpg"],
    price: 900000,
    currentPrice: 400000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 310,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Nhật Bản",
    srcImg: ["./images/economic_books/310.jpg"],
    price: 150000,
    currentPrice: 50000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 311,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Quản lí bất động sản",
    srcImg: ["./images/economic_books/311.jpg"],
    price: 330000,
    currentPrice: 200000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 312,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Trong Cuộc Cách Mạng Cộng Nghệ 4.0",
    srcImg: ["./images/economic_books/312.jpg"],
    price: 550000,
    currentPrice: 300000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 313,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế Thương Nghiệp Việt Nam dưới Triều Nguyễn",
    srcImg: ["./images/economic_books/313.jpg"],
    price: 900000,
    currentPrice: 500000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 314,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế và Xã hội việt Nam Dưới Triều Nguyễn",
    srcImg: ["./images/economic_books/314.jpg"],
    price: 500000,
    currentPrice: 400000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },

  {
    id: 315,
    category: "economic_books",
    author: "Đình Phi Hổ",
    title: "Kinh tế học Khái Lược Những Tư Tưởng Lớn",
    srcImg: ["./images/economic_books/315.jpg"],
    price: 600000,
    currentPrice: 300000,
    description:
      "PGS. TS. Đinh Phi Hổ là giảng viên chính tại trường Đại học Kinh tế TP. Hồ Chí Minh và là giảng viên thỉnh giảng các môn học Kinh tế vĩ mô, Kinh tế vi mô, Kinh tế phát triển, Kinh tế nông nghiệp và Phương pháp nghiên cứu kinh tế cho các chương trình sau đại học của các trường ĐH Ngân hàng",
  },
];
var usersAccount = [
  {
    id: "1",
    user_name: "admin1",
    pw: "123",
    isActive: true,
    account_type: 2,
    email: "user1@gmail.com",
  },
  {
    id: "2",
    user_name: "user2",
    pw: "123",
    isActive: true,
    email: "user1@gmail.com",

    account_type: 1,
  },
  {
    id: "3",
    user_name: "user3",
    pw: "123",
    isActive: true,
    email: "user1@gmail.com",

    account_type: 1,
  },
  {
    id: "4",
    user_name: "user4",
    pw: "123",
    isActive: true,
    email: "user1@gmail.com",

    account_type: 1,
  },
  {
    id: "5",
    user_name: "user5",
    pw: "123",
    isActive: true,
    email: "user1@gmail.com",

    account_type: 1,
  },
];
var infoAccount = [
  {
    acc_id: 1,
    full_name: "Nguyen Van A",
    phone: "0123456789",
    address: "Phường Phước Long A Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
  {
    acc_id: 2,
    full_name: "Nguyen Van B",
    phone: "0123456789",
    address: "Phường Phước Long B Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
  {
    acc_id: 3,
    full_name: "Nguyen Van C",
    email: "user1@gmail.com",
    phone: "0123456789",
    address: "Phường Phước Long A Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
  {
    acc_id: 3,
    full_name: "Nguyen Van D",
    phone: "0123456789",
    address: "Phường Phước Long A Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
  {
    acc_id: 4,
    full_name: "Nguyen Van E",
    phone: "0123456789",
    address: "Phường Phước Long A Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
  {
    acc_id: 4,
    full_name: "Nguyen Van E",
    phone: "0123456789",
    address: "Phường Phước Long A Quận 9 Thành phố Hồ Chí Minh",
    create_date: "1/1/2022",
  },
];
var ordersUsers = [
  {
    order_id: 123,
    user_name: "user2",
    full_name: "Nguyen Van C",
    phone: "0123456789",
    details: "Pizza Hải Sản Nhiệt Đới(x1)<br/> Mỳ Ý Cay Hải Sản (x1)",
    address_delivery: "HCM",
    order_date: "10/10/2022",
    total_price: 123000,
    isConfirm: false,
  },
  {
    order_id: 123,
    user_name: "user2",
    full_name: "Nguyen Van C",
    phone: "0123456789",
    details: "",
    address_delivery: "HCM",
    order_date: "10/10/2022",
    total_price: 123000,
    isConfirm: false,
  },
];
if (localStorage.getItem("books") == null) {
  localStorage.setItem("books", JSON.stringify(books));
  books = JSON.parse(localStorage.getItem("books"));
}
if (localStorage.getItem("usersAccount") == null) {
  localStorage.setItem("usersAccount", JSON.stringify(usersAccount));
  usersAccount = JSON.parse(localStorage.getItem("usersAccount"));
}
if (localStorage.getItem("infoAccount") == null) {
  localStorage.setItem("infoAccount", JSON.stringify(infoAccount));
  infoAccount = JSON.parse(localStorage.getItem("infoAccount"));
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let result = parts.join(",");
  return result;
}
function numbertoVND(x) {
  return numberWithCommas(x) + " đ";
}
function toNonAccentVietnamese(str) {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}
