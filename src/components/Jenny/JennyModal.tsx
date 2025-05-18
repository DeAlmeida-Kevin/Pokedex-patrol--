import "./Jenny.css";
import pikapika from "/src/assets/images/hud/pikameme.svg";

const JennyModal = ({ onClose }: { onClose: () => void }) => {
	return (
		<div
			className="jenny-overlay"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			onKeyDown={(e) => e.key === "b" && onClose()}
		>
			<div className="jenny-content">
				<div className="jenny-card">
					<div className="jenny-image">
						<img src={pikapika} alt="Officer Jenny" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JennyModal;
