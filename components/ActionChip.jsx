import PostAddIcon from '@mui/icons-material/PostAdd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {Rating} from "@mui/material";
import {ButtonLoading} from "./LoadingComponents";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


export const AddToListChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <PostAddIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Add to List</span>}
        </div>
    );
}

export const QuickViewChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <RemoveRedEyeOutlinedIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Quick View</span>}
        </div>
    );
}

export const MarkCompleteChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <CheckCircleOutlineOutlinedIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Mark Complete</span>}
        </div>
    );
}

export const WriteReviewChip = ({className}) => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('Please Rate');
    const [review, setReview] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e) => {
    }

    useEffect(() => {
        switch (rating) {
            case 1:
                setComment('Terrible Course 😡');
                break;
            case 2:
                setComment('Bad Course 😒');
                break;
            case 3:
                setComment('Average Course 😐');
                break;
            case 4:
                setComment('Good Course 😄');
                break;
            case 5:
                setComment('Excellent Course 🤩');
                break;
            default:
                setComment('Please Rate');
        }
    }, [rating]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1.3,
        borderRadius: 5,
        paddingX: 5,
    };

    return (
        <>
            <div className={'fixed top-14 left-0 right-0 z-50'}>
                {alert && (
                    <Alert onClose={() => {
                        setAlert(false);
                    }} severity="success"
                           sx={{mt: 2}}
                           variant={'filled'}
                    >
                        <AlertTitle>Success</AlertTitle>
                        Your review has been submitted
                    </Alert>
                )}
            </div>
            <div className={"border-1 flex rounded-lg px-2 items-center justify-center cursor-pointer text-white bg-gray-800 hover:bg-black duration-300 " + className} onClick={handleOpen}>
                <span className="ml-1 text-sm">Write Review</span>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className={''}>
                        Write a Review
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                                size={'large'}
                            />
                            <span className={''}>{comment}</span>
                        </div>
                        <div className={'mt-1'}>
                            <span>Write a Review:</span>
                            <textarea
                                className={'w-full border-1 border-gray-300 rounded-lg p-2'}
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                        <div className={'flex justify-center text-red-500'}>
                            {error}
                        </div>
                        <div className={'flex justify-center'}>
                            <button
                                className={'bg-gray-800 text-white rounded-lg px-4 py-1 mt-2'}
                                onClick={() => {
                                    if(rating !== 0 && review !== '') {
                                        handleSubmit()
                                    }
                                    else {
                                        setError('Please Rate and Write a Review');
                                    }
                                }}
                            >
                                {isLoading ? <ButtonLoading/> : 'Submit'}
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}

export const GotoClass = ({className, link}) => {
    return (
        <div className={'flex justify-center text-white bg-gray-800 hover:bg-black duration-300 mt-5 py-2 rounded-lg mx-4 cursor-pointer ' + className}>
            <span className={'text-lg'}>Enroll</span>
            <KeyboardDoubleArrowRightOutlinedIcon
                className={'my-auto'}
            />
        </div>
    )
}

export const EditProfileChip = ({className}) => {
    return (
        <div className={'flex border-1 border-neutral-200 py-1 px-2 rounded-md cursor-pointer ' + className}>
            <span className={'text-sm font-bold mx-auto'}>Edit profile</span>
        </div>
    )
}



export default {
    AddToListChip,
    QuickViewChip,
    MarkCompleteChip,
    WriteReviewChip,
    GotoClass,
    EditProfileChip
}