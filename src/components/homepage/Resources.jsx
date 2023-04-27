import Image from 'next/image'
import Heart from './Icons/Heart'
import House from './Icons/House'
import Circle from './Icons/Circle'
import Ticket from './Icons/Ticket'

export default function Resources({ data }) {
    return (
        <section className='bg-white  px-5 md:px-0'>
            <div className='max-w-7xl mx-auto'>
                <div className='border-t border-black' />
                <h2 className='text-[25px] my-3 text-[#605EEF]'>
                    Vega works for a range of organizations
                </h2>
                <h1 className='text-[68px] md:text-6xl my-10 leading-none'>
                    Outstanding features built for your needs, <span className='text-[#605EEF]'>makes it easy to grow</span> supporters & extend your reach
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-10'>
                    <div className='relative py-10 px-3'>
                        <div className='h-[100px] flex items-center'>
                            <Heart />
                        </div>
                        <p className='text-[17px] my-10 text-center'>
                            Nonprofits and Charities of all sizes. Activist and Social Networks Fundraising Organizations
                        </p>
                        <div className='absolute left-0 bottom-0 w-full text-center'>
                            <button>
                                <div className='text-[18px] border border-black rounded-full px-10 py-1 hover:border-none hover:bg-black hover:text-white ease-in duration-300'>View Edition</div>
                            </button>
                        </div>
                    </div>
                    <div className='relative py-10 px-3'>
                        <div className='h-[100px] flex items-center'>
                            <House />
                        </div>
                        <p className='text-[17px] my-10 text-center'>
                            Alumni Associations and Guilds Schools, Colleges and Universities
                        </p>
                        <div className='absolute left-0 bottom-0 w-full text-center'>
                            <button>
                                <div className='text-[18px] border border-black rounded-full px-10 py-1 hover:border-none hover:bg-black hover:text-white ease-in duration-300'>View Edition</div>
                            </button>
                        </div>
                    </div>
                    <div className='relative py-10 px-3'>
                        <div className='h-[100px] flex items-center'>
                            <Circle />
                        </div>
                        <p className='text-[17px] my-10 text-center'>
                            Clubs, Societies, Professional Groups and Magazine Distributors
                        </p>
                        <div className='absolute left-0 bottom-0 w-full text-center'>
                            <button>
                                <div className='text-[18px] border border-black rounded-full px-10 py-1 hover:border-none hover:bg-black hover:text-white ease-in duration-300'>View Edition</div>
                            </button>
                        </div>
                    </div>
                    <div className='relative py-10 px-3'>
                        <div className='h-[100px] flex items-center'>
                            <Ticket />
                        </div>
                        <p className='text-[17px] my-10 text-center'>
                            Lotteries and Ticket Generators
                        </p>
                        <div className='absolute left-0 bottom-0 w-full text-center'>
                            <button>
                                <div className='text-[18px] border border-black rounded-full px-10 py-1 hover:border-none hover:bg-black hover:text-white ease-in duration-300'>View Edition</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
