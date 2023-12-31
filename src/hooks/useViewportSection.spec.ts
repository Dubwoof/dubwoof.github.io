// // Generated by CodiumAI

// describe('useViewportSection', () => {
//     // Registers a section reference and returns an object with an empty active section.
//     it('should register a section reference and return an object with an empty active section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         const sectionRef = document.createElement('div');
//         registerSectionRef(sectionRef);
//         expect(activeSection).toBe('');
//     });

//     // Registers multiple section references and returns an object with an empty active section.
//     it('should register multiple section references and return an object with an empty active section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         const sectionRef1 = document.createElement('div');
//         const sectionRef2 = document.createElement('div');
//         registerSectionRef(sectionRef1);
//         registerSectionRef(sectionRef2);
//         expect(activeSection).toBe('');
//     });

//     // Registers multiple section references and returns an object with the active section set to the last section.
//     it('should register multiple section references and return an object with the active section set to the last section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         const sectionRef1 = document.createElement('div');
//         const sectionRef2 = document.createElement('div');
//         registerSectionRef(sectionRef1);
//         registerSectionRef(sectionRef2);
//         expect(activeSection).toBe(sectionRef2.id);
//     });

//     // Does not register a null section reference and returns an object with an empty active section.
//     it('should not register a null section reference and return an object with an empty active section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         registerSectionRef(null);
//         expect(activeSection).toBe('');
//     });

//     // Registers a section reference with an empty id and returns an object with an empty active section.
//     it('should register a section reference with an empty id and return an object with an empty active section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         const sectionRef = document.createElement('div');
//         sectionRef.id = '';
//         registerSectionRef(sectionRef);
//         expect(activeSection).toBe('');
//     });

//     // Registers a section reference with a non-unique id and returns an object with an empty active section.
//     it('should register a section reference with a non-unique id and return an object with an empty active section', () => {
//         const { activeSection, registerSectionRef } = useViewportSection();
//         const sectionRef1 = document.createElement('div');
//         const sectionRef2 = document.createElement('div');
//         sectionRef1.id = 'section';
//         sectionRef2.id = 'section';
//         registerSectionRef(sectionRef1);
//         registerSectionRef(sectionRef2);
//         expect(activeSection).toBe('');
//     });
// });
