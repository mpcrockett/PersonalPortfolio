import { BsXLg } from 'react-icons/bs';

interface Props {
  title: string,
  description: string,
  repoUrl: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(props: Props) {
  const { title, description, repoUrl, setShowModal } = props;

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-deep-blue outline-none focus:outline-none m-4">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200">
            <h3 className="text-3xl font-lora font-semibold">
              {title}
            </h3>
            <div className="p-1 ml-auto float-right text-3xl leading-none outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <BsXLg />
            </div>
          </div>
          {/*body*/}

          <div className="relative p-6 flex-auto">
            <p className="my-4 text-white text-lg leading-relaxed font-raleway">
              {description}
            </p>
          </div> 
          <p className='text-red font-raleway uppercase text-sm font-bold m-4'>
					<a target='_blank' rel='noreferrer noopener' href={repoUrl}>
						See the code
					</a>
				</p>
        </div>
      </div>
    </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
        
  );
}