
import { useRouter } from 'next/router';
import { Button} from 'react-bootstrap'

export default function Forgot() {
    const router = useRouter()
  return (
    <div className="">
        <div class="auth-portal-wrap">
            <div class="auth-portal-inner">
                <div class="auth-portal-form-wrap" data-aos="fade-up" data-aos-duration="1500">
                    <div class="title forgot-title">
                        <h2>Forgot Your Password?</h2>
                        <p>Don’t worry! Just fill in your email and we’ll send you a link to reset your password.</p>
                    </div>
                    <div class="auth-form-box">
                        <form action="">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" placeholder="name@email.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="submit-button">
                                <Button onClick={() => router.back()}>Reset Password</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}