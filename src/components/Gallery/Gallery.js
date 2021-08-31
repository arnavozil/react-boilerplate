import React, { useState } from 'react';
import CheckBoxes from '../../widgets/Box/Box';
import PrimaryButton from '../../widgets/Button/Button';
import Card from '../../widgets/Card/Card';
import Compare, { MultiCompare } from '../../widgets/Compare/Compare';
import Form from '../../widgets/Form/Form';
import PrimaryHeading, { LinkHeading } from '../../widgets/Heading/Heading';
import TextInput, { TextArea } from '../../widgets/Input/Input';
import { LoadingDots, TypingDots } from '../../widgets/Loader/Loader';
import TwinTab from '../../widgets/Tab/Tab';
import { useWarning } from '../../widgets/Warning/Warning';
import s from './Gallery.module.scss';

const Gallery = () => {
    const [openWarning] = useWarning();
    const [click, setClick] = useState(1);
    return <div className={s.main}>
        <h1>Welcome to my gallery!</h1>
        <h2>Checkboxes</h2>
        <CheckBoxes />
        <hr />
        <h2>Primary Button</h2>
        <PrimaryButton />
        <hr />
        <h2>Card</h2>
        <Card>
            <p>
                In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,” which outlined just 20 tags, many of which are now obsolete or have taken other forms. The first surviving tag to be defined in the document, after the crucial anchor tag, is the paragraph tag. It wasn’t until 1993 that a discussion emerged on the proposed image tag.
                Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever. It’s evident in the very way that new elements such as article and aside are named. HTML5 asks us to treat the HTML document more as… well, a document.
                <br />
                It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.
            </p>
        </Card>
        <hr />
        <h2>Comparison</h2>
        <Compare 
            labelA='Left Label'
            labelB='Right Label'
        />
        <hr />
        <h2>Multi Comparison</h2>
        <MultiCompare 
            data={[
                { width: 10, left: 0, amount: 55 },
                { width: 20, left: 10, amount: 110 },
                { width: 40, left: 30, amount: 220 },
                { width: 30, left: 70, amount: 165 },
            ]} rightLabel='Right Label' 
            leftLabel='Left Label'
        />
        <hr />
        <h2>Form</h2>
        <Form />
        <hr />
        <h2>Heading</h2>
        <PrimaryHeading text='Primary Heading' />
        <hr />
        <h2>Tracable Links</h2>
        <LinkHeading data={[
            { name: 'Home', to: '/gallery' },
            { name: 'Others', to: '/gallery' },
            { name: 'Gallery', to: '/gallery' },
        ]} />
        <hr />
        <h2>Text Input</h2>
        <TextInput />
        <hr />
        <h2>Text Area</h2>
        <TextArea />
        <hr />
        <h2>Loaders</h2>
        <LoadingDots />
        <br /><br />
        <TypingDots />
        <hr />
        <h2>Tabs</h2>
        <TwinTab A='First' B='Second' forDesktop />
        <hr />
        <h2>Click button to fire warning</h2>
        <PrimaryButton text='Click Me!' onProceed={() => {
            openWarning('This is a sample warning. ' + click);
            setClick(c => c + 1);
        }} />
    </div>
};

export default Gallery;