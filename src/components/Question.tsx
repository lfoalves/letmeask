import {ReactNode} from 'react'
// import cx from 'classnames'

import '../styles/question.scss'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighLighted?: boolean;
}


export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighLighted = false,
}: QuestionProps) {
    return(
        // <div className={`question ${isAswered ? 'answered' : ''} ${isHighLighted ? 'highlighted' : ''}`}>
        //Use o código abaixo com a lib 'clasnames'
        // cx('question', { answered: isAswered }, { highlighted: isHighLighted && !isAswered },)
        <div className={`question ${isAnswered ? 'answered' : ''} ${isHighLighted && !isAnswered ? 'highlighted' : ''}`}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                    <div>
                        {children}
                    </div>
            </footer>
        </div>
    );
}