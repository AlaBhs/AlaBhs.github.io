import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./ChatBox.css";
import ameniPhoto from "../../images/ameniphoto.png";
import { IoIosAttach } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import PayModal from "./PayModal";
import { FaFileAlt } from "react-icons/fa";

export default function ChatBox() {
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handlePayButtonClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleIconClick = () => {
    // Trigger a click event on the file input element
    fileInputRef.current.click();
  };
  const handleDownload = () => {
    if (selectedFile) {
      const downloadUrl = URL.createObjectURL(selectedFile);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = selectedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    }
  };

  useEffect(() => {
    // Function to handle click on header
    const handleHeaderClick = () => {
      $(".chat").slideToggle(300, "swing");
      $(".chat-message-counter").fadeToggle(300, "swing");
    };

    // Function to handle click on close button
    const handleCloseButtonClick = (e) => {
      e.preventDefault();
      $("#live-chat").fadeOut(300);
    };

    // Attach event listeners when component mounts
    $("#live-chat header").on("click", handleHeaderClick);
    $(".chat-close").on("click", handleCloseButtonClick);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      $("#live-chat header").off("click", handleHeaderClick);
      $(".chat-close").off("click", handleCloseButtonClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div id="live-chat">
      <header class="clearfix">
        <div
          style={{ backgroundImage: `url(${ameniPhoto})` }}
          id="receiver-account-img"
        />

        <h4>Ameni Hassen</h4>
        <span href="" class="chat-close">
          x
        </span>
        <span class="chat-message-counter">3</span>
      </header>

      <div class="chat">
        <div class="chat-history">
          <div class="chat-message clearfix">
            <div
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
              }}
              className="chat-img "
            />
            <div class="chat-message-content clearfix">
              <span class="chat-time">13:30</span>
              <h5>Me</h5>
              <p>
                Hi there! I need to translate a document from English to Arabic
                . Can you help me with that?
              </p>
            </div>
          </div>
          <hr></hr>

          <div class="chat-message clearfix">
            <div
              style={{ backgroundImage: `url(${ameniPhoto})` }}
              className="chat-img "
            />
            <div class="chat-message-content clearfix">
              <span class="chat-time">13:35</span>
              <h5>Ameni Hassen</h5>
              <p>Absolutely! Could you please provide me with the document?</p>
            </div>
          </div>
          <hr></hr>

          <div class="chat-message clearfix">
            <div
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
              }}
              className="chat-img "
            />
            <div class="chat-message-content clearfix">
              <span class="chat-time">13:37</span>
              <h5>Me</h5>
              <p>Sure, let me send it to you.</p>
            </div>
          </div>
          <hr></hr>

          {selectedFile && (
            <>
              <div class="chat-message clearfix">
                <div
                  style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
                  }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:38</span>
                  <h5>Me</h5>
                  <div
                    className="file-message-container"
                    onClick={handleDownload}
                  >
                    <FaFileAlt />
                    <div>
                      <p>{selectedFile.name}</p>
                      <p>File Size: {selectedFile.size} bytes</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{ backgroundImage: `url(${ameniPhoto})` }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Ameni Hassen</h5>
                  <p>
                    Great! I'll review it and provide you with a price quote and
                    estimated deadline for the translation. Is there a specific
                    deadline you have in mind?
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
                  }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Me</h5>
                  <p>
                    Ideally, I would like to have it done within a week. Is that
                    possible?
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{ backgroundImage: `url(${ameniPhoto})` }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Ameni Hassen</h5>
                  <p>
                    Yes, that should be doable. I'll make sure to prioritize
                    your project. As for the price, I calculated it based on the
                    word count and complexity of the document, it costs 50
                    dinars
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
                  }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Me</h5>
                  <p>
                    Thank you! I will pay it now. Please keep me updated on the
                    progress as well.
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{ backgroundImage: `url(${ameniPhoto})` }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Ameni Hassen</h5>
                  <p>
                    Absolutely, You're welcome! I'll do my best to provide you
                    with an accurate and timely translation.
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="chat-message clearfix">
                <div
                  style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdheCR0hojCQAfcWPEjeejJF5T5iRAxbZniSYbXrUybYFxrdQuHTU3F7mmcNyTjTeJMw&usqp=CAU)`,
                  }}
                  className="chat-img "
                />
                <div class="chat-message-content clearfix">
                  <span class="chat-time">13:37</span>
                  <h5>Me</h5>
                  <p>Thank you!</p>
                </div>
              </div>
            </>
          )}
        </div>
        {/* end chat-history  */}
        {/* <p class="chat-feedback">Yaziyor..</p> */}
        <form action="#" method="post">
          <fieldset className="chat-fieldset">
            <button onClick={handlePayButtonClick}>
              Pay
              <RiMoneyDollarCircleLine />
            </button>
            <IoIosAttach
              className="chatbox-attach-icon"
              onClick={handleIconClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the file input element
            />
            <input type="text" placeholder="Aa" autofocus />
            <input type="hidden" />
          </fieldset>
        </form>
        {showModal && <PayModal onClose={handleCloseModal}></PayModal>}
      </div>
      {/* end chat  */}
    </div>
    //  end live-chat
  );
}
