const fs = require('fs');
const filePath = 'd:\\Phoenix\\data\\csFundamentals.js';
let fileContent = fs.readFileSync(filePath, 'utf-8');

const newOops = `  {
    id: "oops",
    subject: "Object-Oriented Programming (OOPS)",
    icon: "code",
    chapters: [
      {
        title: "📚 Introduction to OOPs",
        source: "Curated Resources",
        topics: [
          { name: "Procedural vs Object Oriented Programming", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs" },
          { name: "Classes and Objects", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#class-and-object" },
          { name: "Constructors and Destructors", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#constructor" },
          { name: "Access Modifiers", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#access-modifiers" }
        ]
      },
      {
        title: "🏛️ The 4 Pillars of OOPs",
        source: "Curated Resources",
        topics: [
          { name: "Encapsulation", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#encapsulation" },
          { name: "Abstraction", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#abstraction" },
          { name: "Inheritance", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#inheritance" },
          { name: "Types of Inheritance", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#types-of-inheritance" },
          { name: "Polymorphism", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#polymorphism" },
          { name: "Compile-time vs Runtime Polymorphism", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#compile-time-polymorphism-vs-run-time-polymorphism" }
        ]
      },
      {
        title: "⚙️ Advanced OOPs Concepts",
        source: "Curated Resources",
        topics: [
          { name: "Abstract Classes vs Interfaces", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#abstract-class-vs-interface" },
          { name: "Method Overloading vs Overriding", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#method-overloading-vs-method-overriding" },
          { name: "Static Keyword", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#static-keyword" },
          { name: "Final / Const Keyword", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#final-keyword" },
          { name: "Virtual Functions", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#virtual-function" },
          { name: "Friend Class and Friend Function", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#friend-class" }
        ]
      },
      {
        title: "🧭 Object-Oriented Design (SOLID)",
        source: "Curated Resources",
        topics: [
          { name: "Single Responsibility Principle (SRP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#single-responsibility-principle" },
          { name: "Open/Closed Principle (OCP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#openclosed-principle" },
          { name: "Liskov Substitution Principle (LSP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#liskov-substitution-principle" },
          { name: "Interface Segregation Principle (ISP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#interface-segregation-principle" },
          { name: "Dependency Inversion Principle (DIP)", link: "https://github.com/manishkumar8312/CS-Fundamentals/tree/master/OOPs#dependency-inversion-principle" }
        ]
      }
    ]
  }
];`;

const startIdx = fileContent.indexOf('{ id: "oops"');
const endIdx = fileContent.lastIndexOf('];');

if (startIdx !== -1 && endIdx !== -1) {
  // Find the exact starting `{` of the oops object. It might be preceded by spaces and `  {`.
  const realStart = fileContent.lastIndexOf('  {', startIdx);
  const updatedContent = fileContent.substring(0, realStart) + newOops;
  fs.writeFileSync(filePath, updatedContent);
  console.log("OOPS updated successfully.");
} else {
  console.log("Could not find boundaries.");
}
